import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header className="App-header">
      {user ?
        <nav>
            <NavLink to="/profiles">Profiles</NavLink>
            <NavLink to="/index">Index</NavLink>
            <NavLink to="/addPost">Add Post</NavLink>
            <NavLink to="/codeList">Code</NavLink>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
            <NavLink to="/changePassword">Change Password</NavLink>
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
