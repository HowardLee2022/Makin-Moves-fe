
import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import API from "../../utils/API"


const singleDay = (prop) => {

    let{id} = useParams();
    

    const [activity, setActivity] = useState();
    
    const handleChange = (e) => {
        setActivity(e.target.value);
      };

      
    const handleSubmit = (e) =>{
        e.preventDefault();
        const addActivity = {
            name:activity,
            DayId:id
        }

        API.addActivity(addActivity).then((response) => {
            if(response.status == 200) {
            }
        })  
    }


    return (
        <div>
        <h1>Day: {prop.data.DayName}</h1>

        {prop.data.Activities.map((activity,i) => {
            return(
                <p>{activity.name}</p>
            );
         })}
        <form onSubmit={handleSubmit}>
            <div >
                <label >Add Activities</label>
                <input type="text"  placeholder="Activitie" name="Activitie"  onChange={handleChange} />
            </div>
            <button >Submit</button>
        </form>
        
     </div>
    )



}

export default singleDay