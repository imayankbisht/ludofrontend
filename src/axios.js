import axios from "axios";

const instance = axios.create({
    baseURL: "https://ylrwt.sse.codesandbox.io"
})

export default instance;