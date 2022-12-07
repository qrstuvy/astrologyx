import FavoritesCard from "../../components/FavoritesCard/FavoritesCard"
import { useState, useEffect } from 'react';
import sendRequest from "../../utilities/send-request"
import './ProfilePage.css'

export default function ProfilePage({user}){
const [newFavorites, setNewFavorites] = useState([])

useEffect (function () {
    async function getFavorites() {
      const response = await sendRequest(`/daily_horoscope/${user._id}`)
          console.log(response.favorites)
          setNewFavorites(response.favorites)
        }
    getFavorites()
      }, [])


    return(
        <>
        <h1>Hello {user.name}!✨</h1>
        <div className="favorites">
          {newFavorites.map(favorites => 
            <FavoritesCard key={favorites.favoritedDescription} sign={favorites.favoritedSign} date={favorites.favoritedDate} description={favorites.favoritedDescription} />
            )}
        </div>
        
        </>
    )
}