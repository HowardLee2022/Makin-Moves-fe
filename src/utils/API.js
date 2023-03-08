
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
                "authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphY2tpZWxlZSIsImlkIjoyLCJpYXQiOjE2NzgzMDExNzUsImV4cCI6MTY3ODMxMTk3NX0.d9GvNkYIeLa0s-Fah0ZrEqDIoWtVKDT4Q7ApUChIBnk`
            }
        })
    } 
}
export default API