import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from "./Profiles.module.css"

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>List of A-Code-Lytes</h1>
      <div className={styles.container}>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <a className={styles.text} href={profile._id}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{profile.name}</h3>
                </div>
              </div>
            </a>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
      </div>
    </>
  )
}

export default Profiles