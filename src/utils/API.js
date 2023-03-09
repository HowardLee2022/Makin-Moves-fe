
const URL_PREFIX="http://localhost:3000"

const API = {
    getUserData:id=>{
        return fetch(`${URL_PREFIX}/api/users/${id}`).then(res=>res.json())
    }
}
export default API