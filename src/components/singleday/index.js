import {Link} from "react-router-dom"
const singleDay = (prop) => {
    const data = {prop}

    return (
      
        <p>{prop.data.DayName}</p>
     
    )


}

export default singleDay