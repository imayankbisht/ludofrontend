import axios from "axios";

const instance = axios.create({
    baseURL: "http://18.188.41.190:8000"
})

export default instance;