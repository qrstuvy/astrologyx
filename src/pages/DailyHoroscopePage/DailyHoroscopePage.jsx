export default function DailyHoroscopePage({horoscope}) {
  return (
    <div>
    <h1>Daily Horoscope Page</h1>
    Current Date: {horoscope.current_date} <br />
    Compatibility: {horoscope.compatibility} <br />
    Lucky Number: {horoscope.lucky_number} <br />
    Lucky Time: {horoscope.lucky_time} <br />
    Color: {horoscope.color} <br />
    Date Range: {horoscope.date_range} <br />
    Mood: {horoscope.mood} <br />
    Description: {horoscope.description} <br />
</div>
  );
}