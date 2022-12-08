import './FavoritesCard.css'

export default function FavoritesCard({ user, sign, date, description, id, setNewFavorites}) {


const handleDelete = async () => {
    console.log('delete' + id)
    const response = await fetch(`/daily_horoscope/${user._id}/${id}`, {
        method: 'DELETE' 
    }).then(res => res.json())
    console.log(response)
    setNewFavorites(response.favorites)
}

    return (
        <>
         <button onClick={handleDelete}>Delete</button>
        <div className="favorites">
        {id}<br />
        {sign}<br />
        {date}<br />
        {description}<br /><br />
        </div>
        </>
    ) 
}
