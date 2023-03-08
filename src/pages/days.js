
import API from "../utils/API"
import React,{useState, useEffect} from 'react'
import {useParams } from 'react-router-dom';






const postId = window.location.href.split('/').pop();

const Days = (prop) => {
    let {id} = useParams();

    return (
        console.log(id)
    
    )
}

export default Days