import React, { useState } from 'react'
import ProgressBar from '../comps/ProgressBar'

const UploadForm = () => {
	const [file, setFile] = useState(null)
	const [error, setError] = useState(null)
	
	const types = ['image/png', 'image/jpg', 'image/jpeg'] /* allowed file type*/

	const changeHandler = (e) => {
		// get the 1st selected file [0]
		let selected = e.target.files[0]
		
		// check if file is selected and the type is allowed
		if (selected && types.includes(selected.type)) {
			setFile(selected)
			setError('')
		} else {
			setFile(null); /* reset the file value */
			setError('Please select an image file (png or jpeg)') /* set error */
		}
	}

	return (
		<form>
			<label>
				<input type="file" onChange={changeHandler} />
				<span>+</span>
			</label>
			<div className="output">
				{ error && <div className="error">{ error }</div> }
				{ file && <div>{ file.name }</div> }
				{ file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	)
}

export default UploadForm