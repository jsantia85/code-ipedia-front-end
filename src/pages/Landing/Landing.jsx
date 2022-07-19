import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <>
      {user ?
        <main className={styles.container}>
          <h1>hello, {user.name}</h1>
        </main>
        :
        <main className={styles.container}>
          <section className='landing'>
          <img alt="landing-img" className="img" src='/landing.png'></img>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          </section>
        </main>
      }
    </>
  )
}

export default Landing
