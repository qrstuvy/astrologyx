import './daily-horoscope.css'

export default function DailyHoroscopePage({ horoscope, setDay, day, setSunSign, sunSign }) {
  return (
  <>
    <div>
      <button className='day' onClick={() => setDay('Yesterday')}>Yesterday</button>
      <button className='day' onClick={() => setDay('Today')}>Today</button>
      <button className='day' onClick={() => setDay('Tomorrow')}>Tomorrow</button>
    </div>

    <div className="daily-horoscope">
    <h1>{sunSign}</h1>
    <h2>{day}'s Horoscope</h2>
      Current Date: {horoscope.current_date} <br />
      Compatibility: {horoscope.compatibility} <br />
      Lucky Number: {horoscope.lucky_number} <br />
      Lucky Time: {horoscope.lucky_time} <br />
      Color: {horoscope.color} <br />
      Date Range: {horoscope.date_range} <br />
      Mood: {horoscope.mood} <br />
      Description: {horoscope.description} <br />
    </div>
  </>
  );
}