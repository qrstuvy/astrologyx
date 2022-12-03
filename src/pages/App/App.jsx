import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Compatibility from '../Compatibility/Compatibility';
import HomePage from '../HomePage/HomePage';
import DailyHoroscopePage from '../DailyHoroscopePage/DailyHoroscopePage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser());
  const [horoscope, setHoroscope] = useState([])
  const [sunSign, setSunSign] = useState("pisces")
  const [day, setDay] = useState("today")

  useEffect (function () {
    async function getItems() {
    const URL = `https://aztro.sameerkumar.website/?sign=${sunSign}&day=${day}`;
    fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
    .then(json => setHoroscope(json))
    .catch(err => console.error(err))
  }
  getItems()
  }, [])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/compatibility" element={<Compatibility />} />
            <Route path="/dailyhoroscope" element={<DailyHoroscopePage horoscope={horoscope} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
