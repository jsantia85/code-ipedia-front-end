import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header className="App-header">
      {user ?
        <nav>
            <Link to="/profiles">Profiles</Link>
            <Link to="/index">Index</Link>
            <Link to="/addPost">Add Post</Link>
            <Link to="/codeList">Code</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
            <Link to="/changePassword">Change Password</Link>
            <Link to='/addComment'>Add Comment</Link>
        </nav>
      :
        <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
      }
      </header>
    </>
  )
}

export default NavBar
