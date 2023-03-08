import {Link} from "react-router-dom"
const Trips = (prop) => {
    console.log(prop)
    const data = {prop}

    return (

        <div>
            <h2>Trip: {prop.key}</h2>
            <h3>{prop.data.title}</h3>
            <p>{prop.data.description}</p>
            <p>{prop.data.cost}</p>
            <p>{prop.data.start}</p>
            <p>{prop.data.end}</p>
            <Link to = {{pathname : `/mytrips/${prop.data.id}`, prop:{data}}}> <button >View Trip</button></Link> 
            
        </div>

    )


}

export default Trips