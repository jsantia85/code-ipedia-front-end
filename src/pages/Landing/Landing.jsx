import styles from './Landing.module.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <>
    <section className={styles.landing}>
      <h1> Welcome to Code-Ipedia</h1>
      <img src={logo} alt='logo'></img>
      <h3>The best place to save and share snippets of working code.</h3>
      {user ?
        <main className={styles.container}>
        </main>
        :
        <main className={styles.container}>
          <section className={styles.landingSection}>
          <Link to="/login" className='login-btn' id={styles["login-btn"]}>Log In</Link>
          <Link to="/signup" className='signup-btn' id={styles["signup-btn"]}>Sign Up</Link>
          </section>
        </main>
      }
      </section>
    </>
  )
}

export default Landing
