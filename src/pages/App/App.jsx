import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import DailyHoroscopePage from '../DailyHoroscopePage/DailyHoroscopePage';
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [horoscope, setHoroscope] = useState([])

  // useEffect (function () {
  //   async function getItems() {
  //    const info = {
  //     method: 'POST'
  //    }
  //   }
  //   await fetch('https://aztro.sameerkumar.website/?sign=aries&day=today')
  // })

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/dailyhoroscope" element={<DailyHoroscopePage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
