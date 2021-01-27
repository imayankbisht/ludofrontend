import axios from 'axios';
import {decrypt} from '../../Authentication/auth';

const tokens = localStorage.getItem('jwtToken');


//sending token through header...
const authAxios = axios.create({
    headers:{
        "x-auth-token":`${tokens}`
    }
});

export function apiCall(method ,path , data){
    return new Promise(async(resolve ,reject)=>{
        return await authAxios[method](path , data)
        .then(res => {
            setTokenHeaders(tokens);
            const data = decrypt(res.data);
            const result = JSON.parse(data);
            return resolve(result);
        })
        .catch(err =>{
            return reject(err.message);
        });
    });
}


function setTokenHeaders(token){
    if(token){
       axios.defaults.headers.common["x-auth-token"] = `${token}`;
    }else{
        delete axios.defaults.headers.common["x-auth-token"];
    }
}