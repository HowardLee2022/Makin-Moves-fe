import React,{useState} from 'react'
import API from "../utils/API"

function AddTrip(prop) {
    
    const [formData, setFormData] = useState({
        title: "",
        start: new Date(),
        end:  new Date(),
        guest:  "",
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
                    guest:  "",
                    description: "",
                })
                // location.href = "./mytrips"    
            }
        })  
    }


    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label >Title</label>
                <input type="text"  placeholder="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div >
                <label >guest</label>
                <input type="text" placeholder="guest" name="guest" onChange={handleChange}/>
            </div>
            <div >
                <label >start Date</label>
                <input type="date"  placeholder="start date" name="start" onChange={handleChange}/>
            </div>
            <div >
                <label >end date</label>
                <input type="date"  placeholder="end date" name="end" onChange={handleChange}/>
            </div>
            <div >
                <label >cost</label>
                <input type="number"  placeholder="cost" name="cost" onChange={handleChange}/>
            </div>
         
            <div >
                <label>Description</label>
                <textarea  rows="3" name="description" onChange={handleChange}></textarea>
            </div>
            <button >Submit</button>
        </form>

    )


}

export default AddTrip;