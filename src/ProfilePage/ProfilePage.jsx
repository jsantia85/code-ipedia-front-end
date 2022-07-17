import { useState, useEffect } from 'react'
import * as profileService from '../services/profileService'

const ProfilePage = () => {
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
      
    </>
  );
}

export default ProfilePage