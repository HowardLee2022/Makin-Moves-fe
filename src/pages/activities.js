import {useParams } from 'react-router-dom';



const Days = (prop) => {
    let {id} = useParams();
 



    return (
        <div>
            <p>{id}</p>
        </div>
    
    )
}

export default Days