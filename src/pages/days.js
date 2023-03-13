
import API from "../utils/API"
import React,{useState, useEffect} from 'react'
import {useParams } from 'react-router-dom';






// const postId = window.location.href.split('/').pop();

const Days = (prop) => {
    let {id} = useParams();
    const [trips, setTrips] = useState([])
    const [days, setDays] = useState([])
    const [guestEmail,setGuestEmail] = useState();

    const [daysData, setDaysData] = useState({
        DayName:"",
        activities:"",
        TripId:id
    });

    const handleChange = (e) => {
        setDaysData({
          ...daysData,
          [e.target.name]: e.target.value,
        });
      };

      const handleChangeGuest = (e) => {
        setGuestEmail(e.target.value);
      };

//fetches trip
    const fetchTrips = () => {
        API.getTripData(id).then(data => {
            setTrips(data)
        
        })
    }

    const fetchDays= () => {
        API.getDaysData(id).then(data => {
            setDays(data)
        })
    }


    let hello = {
        DayName:"4",
        activities:"go snowboarding",
        TripId:id

    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        API.addDays(daysData).then((response) => {
            if(response.status == 200) {
            }
        })  
    }

    const handleSubmitGuest = (e) =>{
        e.preventDefault();
        const addUser = {
            email:guestEmail,
            tripId:id
        }
        console.log(addUser)
        API.addUserToTrip(addUser).then((response) => {
            if(response.status == 200) {
            }
        })  
    }

    useEffect(()=>{
        fetchTrips()
        fetchDays()
     },[])



    return (
        <div>
        <h1>{trips.title}</h1>
        <h1>{trips.description}</h1>
        <h1>{trips.guest}</h1>
        
        
        {days.map((day , i) => {
               return(
                <div>
                <p>{day.DayName}</p>
                <p>{day.activities}</p>
                </div>

               )
        })}
           

                
        <form onSubmit={handleSubmit}>
            <div >
                <label >Add Day</label>
                <input type="text"  placeholder="DayName" name="DayName"  onChange={handleChange} />
            </div>
            <div >
                <label >Activitie</label>
                <input type="text"  placeholder="DayName" name="activities"  onChange={handleChange} />
            </div>
            <button >Submit</button>
        </form>


        <form onSubmit={handleSubmitGuest}>
            <div >
                <label >Add User</label>
                <input type="text"  placeholder="email" name="guestEmail" value={guestEmail}  onChange={handleChangeGuest} />
            </div>

            <button >Submit</button>
        </form>
                </div>
              
      
    
    )
}

export default Days 