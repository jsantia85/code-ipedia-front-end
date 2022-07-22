import { useState, useRef, useEffect } from 'react'
import styles from './AddComments.module.css'


function AddComment(props) {
  console.log(props.user)
  const [formData, setFormData]= useState({
    comments: '',
  })
  
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    const form = {
      comments: formData.comments,
    }
    props.handleAddComment(form, props.postId)
    // console.log('message', props.comments)
  }
  console.log(props)
  // console.log('it wokr')
  

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])
  


  return (
    <>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} className={styles.commentForm}>
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
        <button
        type="submit"
	      className={styles.commentBtn}
        onClick={handleSubmit}
        disabled={!validForm}> 
        Add Comment
  </button>
  </form>
  </>
  )
}

export default AddComment