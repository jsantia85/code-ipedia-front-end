import { useState, useRef, useEffect } from 'react'
import './AddComments.css'


function AddComment (props) {
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const [formData, setFormData]= useState({
    comments: '',
    author: '',
  })

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
		evt.preventDefault()
	}

  return (
    <>
    <h1>Add Comment</h1>
    <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
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
	      className="btn btn-primary btn-fluid"> 
        Add Comment
		    </button>
      </div>
  </form>
  </>
  )
}

export default AddComment