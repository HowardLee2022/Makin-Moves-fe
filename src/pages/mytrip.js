import Trip from "../components/trips"
import API from "../utils/API"
import React,{useState, useEffect} from 'react'


const MyTrips = () => {
    const [trips, setTrips] = useState([])

    const fetchTrips = () => {
        API.getUserData(2).then(data => {
            setTrips(data.Trips)
            console.log(data);
        
        })
    }

    useEffect(()=>{
        fetchTrips()
     },[])


    return (
        <div>
            <h3>hi</h3>
            {trips.map((trip,i) => {
                return(
                <Trip data={trip} key={i}/>
                );
             })}
        </div>
    
    )
}

export default MyTrips