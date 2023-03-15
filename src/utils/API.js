
const URL_PREFIX="http://localhost:3001"

// const URL_PREFIX="https://makin-moves-be.herokuapp.com"





const API = {
    getUserData:id=>{
        return fetch(`${URL_PREFIX}/api/users/${id}`).then(res=>res.json())
    },
    addTrip:(formData,token) =>{
        return fetch(`${URL_PREFIX}/api/trips`,{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
            }
        })
    },
    editTrip:(formData,id,token) =>{
        return fetch(`${URL_PREFIX}/api/trips/${id}`,{
            method:"PUT",
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
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
    isValidToken:token=>{
        return fetch(`${URL_PREFIX}/api/users/isValidToken`,{
            headers:{
                "authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    addUserToTrip:(userObject) =>{
  
        console.log(JSON.stringify(userObject))
        return fetch(`${URL_PREFIX}/api/users/addtrip`, {
            method:"POST",
            body:JSON.stringify(userObject),
            headers:{
                "Content-Type":"application/json"
            }
        })
    },

    getSingleDay:id=>{
        return fetch(`${URL_PREFIX}/api/day/${id}`).then(res=>res.json())
    },

    addActivity:(userObject)=>{
        return fetch(`${URL_PREFIX}/api/activitie`,{
            method:"POST",
            body:JSON.stringify(userObject),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())

    }
    

}
export default API