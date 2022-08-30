import axios from "axios"


const instance = axios.create({
    baseURL:"http://localhost:5001/clone-5c2cc/us-central1/api" // The API (CLoud function) Call
})

export default instance;