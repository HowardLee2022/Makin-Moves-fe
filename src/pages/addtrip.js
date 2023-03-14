import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import API from "../utils/API"

function AddTrip(prop) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        start: new Date(),
        end:  new Date(),
        description: "",
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        API.addTrip(formData,prop.token).then((response) => {
            if(response.status == 200) {
                setFormData({
                    title: "",
                    start: "",
                    end:  "",
                    description: "",
                })
                navigate("/mytrips");   
            }
        })  
    }


    return (
        <div class="container my-3">
            <h1 class="text-center">Create a Trip</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Title</label>
                <input className="form-control" type="text"  placeholder="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label >start Date</label>
                <input  className="form-control" type="date"  placeholder="start date" name="start" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label >end date</label>
                <input className="form-control" type="date"  placeholder="end date" name="end" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label >cost</label>
                <input className="form-control" type="number"  placeholder="cost" name="cost" onChange={handleChange}/>
            </div>
         
            <div className="form-group">
                <label>Description</label>
                <textarea  rows="3" name="description" onChange={handleChange}></textarea>
            </div>
            <button className="w-30 btn btn-primary btn-lg" >Submit</button>
        </form>
        </div>

    )


}

export default AddTrip;