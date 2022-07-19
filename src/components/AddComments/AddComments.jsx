import { useState, useRef, useEffect } from 'react'
import './AddComments.css'


function AddComment(props) {

  const [formData, setFormData]= useState({
    author: '',
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
      author: formData.author,
      comments: {comments: formData.comments},
    }
    props.handleAddComment(form)
  }
  // console.log('it wokr')
  

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])
  


  return (
    <>
    
    <div>
      
    </div>
    			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
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
        onClick={handleSubmit}
        disabled={!validForm}> 
        Add Comment
		    </button>
      </div>
  </form>
  </>
  )
}

export default AddComment