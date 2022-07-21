import { useState, useRef, useEffect } from 'react'
// import { CommentsList } from '../../pages/PostDetails/CommentsList'
import './AddComments.css'
import * as postService from '../../services/postService'
// import { CommentsList } from '../CommentsList/CommentsList'
import { Link } from 'react-router-dom'
// import styles from "./Index.module.css";
// import { NavLink } from 'react-router-dom'

function AddComment(props) {
  console.log(props.user)
  const [formData, setFormData]= useState({
    comments: '',
  })
  
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    console.log(formData)
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    const form = {
      comments: formData.comments,
    }
    console.log('this is props', props.handleAddComment)
    console.log(form)
    postService.createComment(form, props.postId)
  }
  console.log(props)
  // console.log('it wokr')
  

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])
  


  return (
    <>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
      <div>
      <textarea 
        type="text"
        id="comments"
        name="comments"
        onChange={handleChange}
        rows="5"
        cols="33"
        
        >
      </textarea>
      </div>
      <Link to='/index/:postId'>
        <button
        type="submit"
	      className="btn btn-primary btn-fluid"
        onClick={handleSubmit}
        disabled={!validForm}> 
        Add Comment
  </button>
      </Link>
  </form>
  </>
  )
}

export default AddComment