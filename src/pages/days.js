
import API from "../utils/API"
import React,{useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom';






// const postId = window.location.href.split('/').pop();

const Days = (prop) => {
    let {id} = useParams();
    const [trips, setTrips] = useState([])
    const [days, setDays] = useState([])
    const [guestEmail,setGuestEmail] = useState();

    const [daysData, setDaysData] = useState({
        DayName:"",
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
        <div class="row">
        <div class="col-12 col-lg-2 m-3 bg-light border">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Add Day</label>
                <input className="form-control" type="text"  placeholder="DayName" name="DayName"  onChange={handleChange} />
            </div>
            {/* <div >
                <label >Activitie</label>
                <input type="text"  placeholder="DayName" name="activities"  onChange={handleChange} />
            </div> */}
            <button className="w-30 btn btn-primary btn-sm" >Submit</button>
        </form>


        <form onSubmit={handleSubmitGuest}>
            <div className="form-group">
                <label >Add User</label>
                <input className="form-control"
                type="text"  placeholder="email" name="guestEmail" value={guestEmail}  onChange={handleChangeGuest} />
            </div>

            <button className="w-30 btn btn-primary btn-sm " >Submit</button>
        </form>

        </div>
        <div class="col-12 col-lg-9 m-3 border">
            <div class="bg-light p-2 rounded">
                     <h1 class="text-center">{trips.title}</h1>
                      <h1 class="text-center">{trips.description}</h1>
                        <h1>{trips.guest}</h1>
        
                <div class="bg-white border">
                    {days.map((day , i) => {
                         return(
                        <div class="border">
                        <h1 class="center-align">{day.DayName}</h1>
                        <Link to={{pathname : `/mytrips/day/${day.id}`}}> <button class="w-30 btn btn-secondary btn-sm" >View Day</button></Link> 
                        </div>

                             )
                      })}
                 </div>


        </div>
                </div>
              
      </div>
    
    )
}

export default Days 