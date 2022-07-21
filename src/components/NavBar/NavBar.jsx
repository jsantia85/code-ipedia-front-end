import { Link } from 'react-router-dom'
import logo from './Vector.png'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header className="App-header">
      {user ?
        <nav>
            <img src={logo} alt='logo' id='image' ></img>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profiles">Profiles</NavLink>
            <NavLink to="/index">Index</NavLink>
            <NavLink to="/addPost">Add Post</NavLink>
            <NavLink to="/codeList">Code</NavLink>
            <div className={styles.dropdown}>
              <p className={styles.dropbtn}>Account</p>
              <div className={styles.dropdownContent}>
                <Link to="" onClick={handleLogout}>LOG OUT</Link>
                <NavLink to="/changePassword">Change Password</NavLink>
              </div>
            </div>
            {/* <Link to='/addComment'>Add Comment</Link> */}
        </nav>
      :
        <></> 
      }
      </header>
    </>
  )
}

export default NavBar
