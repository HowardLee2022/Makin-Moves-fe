
const URL_PREFIX="http://localhost:3001"

const API = {
    getUserData:id=>{
        return fetch(`${URL_PREFIX}/api/users/${id}`).then(res=>res.json())
    },
    addTrip:(formData) =>{
        return fetch(`${URL_PREFIX}/api/trips`,{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikhvd2FyZGxlZSIsImlkIjoxLCJpYXQiOjE2NzgzODI4ODMsImV4cCI6MTY3ODM5MzY4M30.9Cxq8_1Ru38li1kkk8A4-Zkv7nqL_FAoQ-2e-aqQuiE`
            }
        })
    },

    getTripData: id =>{
        return fetch(`${URL_PREFIX}/api/trips/${id}`).then(res=>res.json())
    },

    addDays:(daysData)=>{
        return fetch(`${URL_PREFIX}/api/day`,{
            method:"POST",
            body:JSON.stringify(daysData),
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikhvd2FyZGxlZSIsImlkIjoxLCJpYXQiOjE2NzgzODI4ODMsImV4cCI6MTY3ODM5MzY4M30.9Cxq8_1Ru38li1kkk8A4-Zkv7nqL_FAoQ-2e-aqQuiE`
            }
        })
    },
    getDaysData:id=>{
        return fetch(`${URL_PREFIX}/api/day/day/${id}`).then(res=>res.json())
    },
    signup:userObj=>{
        return fetch(`${URL_PREFIX}/api/users/`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    login:userObj=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

}
export default API