import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
// import { NavLink } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Index from './pages/Index/Index'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddPost from './pages/AddPost/AddPost'
import EditPost from './pages/EditPost/EditPost'
import * as postService from './services/postService'
import CodeList from './pages/CodeList/CodeList'
import AddComment from './components/AddComments/AddComments'
import * as authService from './services/authService'
import ProfilePage from './ProfilePage/ProfilePage'
import DisplayCodes from './pages/CodeList/DisplayCodes'
import * as profileService from './services/profileService'
import { PostDetails}   from './pages/PostDetails/PostDetails'
import { CommentsList } from './components/CommentsList/CommentsList'
const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const[comments, setComments] = useState([])
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  
  const handleAddPost = async (newPostData) => {
    const newPost = await postService.create(newPostData)
    // if (photo) {
    //   newPost.photo = await postPhotoHelper(photo, newPost._id)
    // }
    setPosts([...posts, newPost])
    navigate('/index')
  }
  
  const postPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await postService.addPhoto(photoData, id)
  }
  
  const handleAddComment = async (newCommentData, id) => {
    const newComment = await postService.createComment(newCommentData, id)
    setComments([...comments, newComment])
  }


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.getAll()
      setPosts(postData)
    }
    fetchPosts()
  }, [])

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleUpdatePost = async (updatedPostData) => {
    const updatedPost = await postService.update(updatedPostData)
    const newPostsArray = posts.map(post =>
      post._id === updatedPost._id ? updatedPost : post)
    setPosts(newPostsArray)
    navigate('/index')
  }

  const handleDeletePost = async id => {
    const deletedPost = await postService.deleteOne(id)
    setPosts(posts.filter(post => post._id !== deletedPost._id))
  }

  return (
    <>
    <div className='App'>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
      <Routes>
        <Route 
          path="/" 
          element={<Landing user={user} />} />
        <Route 
          path="/signup" 
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}/>
        <Route 
          path="/login" 
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}/>
        <Route 
          path="/profiles" 
            element={
              user ? 
                <Profiles posts={posts}/> : 
                <Navigate to="/login" />}/>
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
              ) : (
                <Navigate to="/login" />
                )
              }/>
        
          <Route
            path="/index"
            element={user ? 
              <Index posts={posts} user={user} handleDeletePost={handleDeletePost}/> : 
              <Navigate to="/login" />}
          />
          <Route 
            path="/displayCodes" 
            element={<DisplayCodes />}/>
          <Route 
            path="/addPost" 
            element={<AddPost handleAddPost={handleAddPost} />}/>
          <Route 
            path="/codeList" 
            element={<CodeList posts={posts} />}/>
          <Route 
            path='/edit' 
            element={<EditPost user={user} handleUpdatePost={handleUpdatePost}/>}/>
          <Route 
            path='/addComment' 
            element={<AddComment handleAddComment={handleAddComment}/>}/>
          <Route
            path="/:profileId"
            element={
              user ? 
                <ProfilePage profiles={profiles} posts={posts} user={user}/> : 
                <Navigate to="/login" />}/>
          {/* <Route 
            path="/index/:postId"
            element={<PostDetails profiles={profiles} posts={posts} user={user} handleAddComment={handleAddComment} handleUpdatePost={handleUpdatePost} handleDeletePost={handleDeletePost}/>}/> */}
            {/* <Route 
            path="/index/:postId"
            element={<CommentsList posts={posts} handleAddComment={handleAddComment} />} */}
            <Route 
            path="/index/:postId"
            element={<PostDetails profiles={profiles} posts={posts} user={user} handleAddComment={handleAddComment} handleUpdatePost={handleUpdatePost} handleDeletePost={handleDeletePost}/>}/>
            
          
      </Routes>
      </main>
    </div>
    </>
  )
}

export default App
