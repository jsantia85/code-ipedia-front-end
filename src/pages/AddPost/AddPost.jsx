import { useState, useRef, useEffect } from "react"

function AddPost(props) {
    const formElement = useRef()
    const [validForm, setValidForm] = useState(false)
    const [formData, setFormData] = useState({
      title: '',
      category: '',
      code: ''
    })

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
  }
  
	return (
		<>
			<h1>Add Post</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="title-input" className="form-label">
						Title (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="title-input"
						name="title"
            value={formData.title}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="category-input" className="form-label">
						Category (required)
					</label>
          <select 
            name="category" 
            id="category-select"
            type="text"
						className="form-control"
            value={formData.category}
            onChange={handleChange}>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
          </select>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="code-input" className="form-label">
						Code (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="code-input"
						name="code"
            value={formData.code}
            onChange={handleChange}
            required
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Post
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPost