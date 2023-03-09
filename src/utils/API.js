
const URL_PREFIX="http://localhost:3000"

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
                "authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphY2tpZWxlZSIsImlkIjoyLCJpYXQiOjE2NzgzMDExNzUsImV4cCI6MTY3ODMxMTk3NX0.d9GvNkYIeLa0s-Fah0ZrEqDIoWtVKDT4Q7ApUChIBnk`
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
                "authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikhvd2FyZGxlZSIsImlkIjoxLCJpYXQiOjE2NzgzMTI3NzEsImV4cCI6MTY3ODMyMzU3MX0.N6ImkSwmgYTmOJCYx11Ub2kCq3jWeY_SPuYVNKxE00I`
            }
        })
    },
    getDaysData:id=>{
        return fetch(`${URL_PREFIX}/api/day/day/${id}`).then(res=>res.json())
    },
}
export default API