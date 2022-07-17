import { useState, useEffect } from 'react'
import * as profileService from '../services/profileService'

const ProfilePage = () => {
  console.log(useEffect)
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
      <h1>Welcome to </h1>
      <div>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <h1>Welcome to </h1>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
      </div>
    </>
  );
}

export default ProfilePage