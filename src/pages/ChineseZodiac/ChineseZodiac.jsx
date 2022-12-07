import './ChineseZodiac.css'
import { useState } from 'react'

export default function ChineseZodiac() {
	const [zodiac, setZodiac] = useState(null)

	const handleChange = (event) => {
		setZodiac({[event.target.name]: event.target.value})
		console.log(event.target.value)
		}

  return (
    <>
    <h1>Chinese Zodiac</h1>
			<div className="form-content">
			<div>
				<input type="number" name="birthYear" id="birthYear" required onChange={handleChange} min="10" max="100" />
			</div>
				<button className="set">
				<span>Set</span>
				</button>
			</div>
			<h2 id="result-h2">You're (placeholder)</h2>
			<div className="wrapper">

			</div>
    </>
);
}