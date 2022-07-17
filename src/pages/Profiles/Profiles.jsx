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
      <h1>Hello. This is a list of all the profiles.</h1>
      <div className={styles.container}>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <a href={profile._id}>
              <div className={styles.container}>
                if ()
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