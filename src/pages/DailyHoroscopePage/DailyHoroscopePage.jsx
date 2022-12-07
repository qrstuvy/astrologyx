import './Daily-horoscope.css'
import pisces from './pisces.png'
import DateTabs from '../../components/DateTabs/DateTabs'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'

export default function DailyHoroscopePage({ user, horoscope, setDay, day, setSunSign, sunSign }) {

const handleClick = async () => {
  let newFavorite = {
    favoritedSign: sunSign,
    favoritedDate: horoscope.current_date,
    favoritedDescription: horoscope.description
  }
  
  await fetch(`/daily_horoscope/${user._id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newFavorite)
  })
}

  return (
  <>
  <DateTabs setDay={setDay} setSunSign={setSunSign} />

    <div className="daily-horoscope">
    <h2>{day}'s Horoscope</h2>
      <strong>Date:</strong> {horoscope.current_date} <br />

      <img src={pisces} className="pisces" alt="pisces" />

      <h2>{sunSign}</h2>
    <strong>Date Range:</strong> {horoscope.date_range} <br />
      <strong>Mood:</strong> {horoscope.mood} <br />
      <strong>Compatibility:</strong> {horoscope.compatibility} <br />
      <strong>Color:</strong> {horoscope.color} <br />
      <strong>Lucky Number:</strong> {horoscope.lucky_number} <br />
      <strong>Lucky Time:</strong> {horoscope.lucky_time} <br />
      <strong>Description:</strong> {horoscope.description} <br />
    </div>
    <button className="day" onClick={handleClick}>Favorite</button> 
    <FavoriteButton user={user} sunSign={sunSign} horoscope={horoscope} />
  </>
  );
}