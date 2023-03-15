import Trip from "../components/trips"
import API from "../utils/API"
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


const MyTrips = (prop) => {
    const navigate = useNavigate();



    const [trips, setTrips] = useState([])

    const fetchTrips = () => {
        API.getUserData(prop.userId).then(data => {
            setTrips(data.trip)

        })
    }

    useEffect(() => {
        fetchTrips()
    }, [prop.userId,trips])


    return (
        <div>

            {trips.map((trip, i) => {
                return (
                    <Trip data={trip} token={prop.token} id={prop.userId} set={fetchTrips} />
                );
            })}
        </div>

    )
}

export default MyTrips