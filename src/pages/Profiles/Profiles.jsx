import { Link } from 'react-router-dom'
import styles from "./Profiles.module.css"

const Profiles = (props) => {
  
  return (
    <>
      <h1>List of A-Code-Lytes</h1>
      <div className={styles.container}>
      {props.profiles.length ? 
        <>
          {props.profiles.map(profile =>
            <Link to={`/${profile._id}`} className={styles.text} key={profile._id} state={{profile: profile}}>
              <div className={styles.card}>
                <img src={profile.photo} alt="" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>
                    {profile.name}
                  </h3>
                </div>
              </div>
            </Link>
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