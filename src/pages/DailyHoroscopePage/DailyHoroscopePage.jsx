import './Daily-horoscope.css'
import pisces from './pisces.png'
import DateTabs from '../../components/DateTabs/DateTabs'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'
import SignOptions from "../../components/SignOptions/SignOptions"

export default function DailyHoroscopePage({ horoscope, setDay, day, setSunSign, sunSign }) {

  // const handleChange = (event) => {
  //   setSunSign(event.target.value)
  //   }

  return (
  <>
  <DateTabs setDay={setDay} setSunSign={setSunSign} />
    {/* <div className="day-buttons">
      <button className='day' onClick={() => setDay('Yesterday')}>Yesterday</button>
      <button className='day' onClick={() => setDay('Today')}>Today</button>
      <button className='day' onClick={() => setDay('Tomorrow')}>Tomorrow</button>
    </div> */}

    <div className="daily-horoscope">
    <h2>{day}'s Horoscope</h2>
      <strong>Date:</strong> {horoscope.current_date} <br />

      <img src={pisces} className="pisces" />

      <h2>{sunSign}</h2>
    <strong>Date Range:</strong> {horoscope.date_range} <br />
      <strong>Mood:</strong> {horoscope.mood} <br />
      <strong>Compatibility:</strong> {horoscope.compatibility} <br />
      <strong>Color:</strong> {horoscope.color} <br />
      <strong>Lucky Number:</strong> {horoscope.lucky_number} <br />
      <strong>Lucky Time:</strong> {horoscope.lucky_time} <br />
      <strong>Description:</strong> {horoscope.description} <br />
    </div>

    {/* <select value={sunSign} onChange={handleChange} className='select'>
      <option value='Capricorn'>Capricorn</option>
      <option value='Aquarius'>Aquarius</option>
      <option value='Pisces'>Pisces</option>
      <option value='Aries'>Aries</option>
      <option value='Taurus'>Taurus</option>
      <option value='Gemini'>Gemini</option>
      <option value='Cancer'>Cancer</option>
      <option value='Leo'>Leo</option>
      <option value='Virgo'>Virgo</option>
      <option value='Libra'>Libra</option>
      <option value='Scorpio'>Scorpio</option>
      <option value='Sagittarius'>Libra</option>
    </select> */}
  </>
  );
}