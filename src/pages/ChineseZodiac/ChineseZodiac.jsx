import './ChineseZodiac.css'

export default function ChineseZodiac() {
  return (
    <>
    <h1>Chinese Zodiac</h1>
			<div class="form-content">
				<div>
					<input type="number" name="birthYear" id="birthYear" required />
				</div>
				<button class="set">
					<span>Set</span>
				</button>
			</div>
			<h2 id="result-h2">You're (placeholder)</h2>
			<div class="wrapper">

			</div>
    </>
);
}