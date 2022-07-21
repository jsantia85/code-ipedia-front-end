import { useState, useRef, useEffect } from "react"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function AddPost(props) {
	const [code, setCode] = useState('')
	const [formData, setFormData] = useState({
		title: '',
		category: '',
		code: ''
		})
	const [validForm, setValidForm] = useState(false)
	
	const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	const formElement = useRef()

	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleSubmit = evt => {
		evt.preventDefault()
		const form = {
			title: formData.title,
			code: formData.code,
			category: {category: formData.category}
		}
		props.handleAddPost(form)
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
					{/* <input 
						type="text"
						className="form-control"
						id="code-input"
						name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="console.log('Sanity')"
            required
					/> */}
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
						Add Post
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPost