import { useState, useRef, useEffect } from 'react'
import './AddComments.css'


function AddComment (props) {
  const [formData, setFormData]= useState({
    comments: '',
    author: '',
  })
  
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddComment(formData)
  }
  console.log('it wokr')
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])
  


  return (
    <>
    <h1>Add Comment</h1>
    <div>
      
    </div>
    <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
    <div>
      <label>User: </label>
    <input 
						type="text"
						id="author-input"
						name="author"
						required
					/>

      </div>
      
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
      <div>
        <button
        type="submit"
	      className="btn btn-primary btn-fluid"
        disabled={!validForm}> 
        Add Comment
		    </button>
      </div>
  </form>
  </>
  )
}

export default AddComment