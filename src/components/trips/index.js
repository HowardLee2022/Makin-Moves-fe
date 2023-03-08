
const Trips = (prop) => {
    console.log(prop)

    return (

        <div>
            <h2>Trip: {prop.key}</h2>
            <h3>{prop.data.title}</h3>
            <p>{prop.data.description}</p>
            <p>{prop.data.cost}</p>
            <p>{prop.data.start}</p>
            <p>{prop.data.end}</p>
            
        </div>

    )


}

export default Trips