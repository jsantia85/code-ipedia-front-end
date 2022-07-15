import { useState, useRef } from 'react'
import './AddComments.css'


function AddComment(props) {
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const [formData, setFormData]= useState({
    comments: '',
    author: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return (
    <>
    <h1>Add Comment</h1>
    <form>
      <div>
      <textarea 
      id="comment-text"
      name="comments"
      onChange={handleChange}
      disabled={!validForm}
      rows="5"
      cols="33"
      >
      Add your comment here
      </textarea>
      </div>
      <div>
        <button
        type="submit"
	      className="btn btn-primary btn-fluid"> 
        Add Comment
		    </button>
      </div>
  </form>
  </>
  )
}

export default AddComment