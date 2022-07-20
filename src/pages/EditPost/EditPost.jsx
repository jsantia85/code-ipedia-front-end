import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function EditPost(props) {
  const formElement = useRef()
	const location = useLocation()
	const [code, setCode] = useState('')
	const initialState = {
		...location.state.post,
		category: location.state.post.category[0].category
	}
  const [formData, setFormData] = useState(initialState)
  const [validForm, setValidForm] = useState(false)
  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }


  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
	const form = {
		...formData, 
		category: {category: formData.category}
	}
    props.handleUpdatePost(form)
  }
  
	console.log('THIS IS FORMDATA', formData)

	console.log('THIS IS INITIALSTATE', initialState)

	return (
    // <h1>edit Post</h1>
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
						placeholder="What your code does"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="category-input" className="form-label">
						Category (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="category-input"
						name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="ex. React, JavaScript"
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="code-input" className="form-label">
						Code (required)
					</label>
					<Editor
						value={formData.code}
						name="code"
						code={code}
						onValueChange={code => setCode(code)}
						onChange={handleChange}
						highlight={code => highlight(code, languages.js)}
						padding={10}
						textareaClassName="code-editor"
						preClassName="code-editor-pre"
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							backgroundColor: "#fdfdfd",
							color: "#333",
							border: "1px solid #ddd",
							borderRadius: "4px",
							fontSize: 16,
						}}/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Post
					</button>
          <Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditPost