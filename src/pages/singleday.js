import Trip from "../components/trips";
import API from "../utils/API";
import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import SingleDay from "../components/singleday";


const singleDay = () => {
    let{id} = useParams();


    const [days, setDays] = useState();
    const [apiboolean, setApiBoolean] = useState(false);
    const fetchDays = () => {
        API.getSingleDay(id).then(data => {
            setDays(data)
            setApiBoolean(true)
        })
    }

    useEffect(()=>{
        fetchDays()
     },[])


    
    return (
        <div>
        {apiboolean?  <SingleDay data = {days}/>:""}
        </div>
        // console.log(days)
    
    )
}

export default singleDay