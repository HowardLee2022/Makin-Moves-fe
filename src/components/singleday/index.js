
import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import API from "../../utils/API"


const singleDay = (prop) => {

    let{id} = useParams();
    
    const [render, setRender] = useState(prop.data.Activities)

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
            setRender((oldRender)=> [...oldRender, { name: activity }])
        })  
    }


    return (

       
        <div class="row">
            <div class="col-12 col-lg-2 m-3 bg-light border">
            <form onSubmit={handleSubmit}>
                         <div className="form-group" >
                        <label >Add Activities</label>
                     <input className="form-control"
                      type="text"  placeholder="Activity" name="Activitie"  onChange={handleChange} />
                        </div>
                         <button className="w-30 btn btn-primary btn-lg" >Submit</button>
                     </form>

            </div>


            <div class="col-12 col-lg-9 m-3 border">
                <div class="bg-light p-2 rounded">
                    <h1 class="center-align">{prop.data.DayName}</h1>
                    <ul class="list-group mb-3">
                     {render?.map((activity,i) => {
                        return(
                      <li class="list-group-item d-flex justify-content-between lh-sm"><h3>{activity.name}</h3></li>
                         );
                     })}
                     </ul>
                </div>
        
            </div>

     </div>
    )



}

export default singleDay