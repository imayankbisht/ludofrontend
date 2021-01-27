import {apiCall} from '../services/apiCall';
import axios from 'axios';
import crypto from 'crypto';

export function authUser(userData){
        return new Promise((resolve , reject)=>{
            return apiCall('post','https://ylrwt.sse.codesandbox.io/user/login',userData)
            .then(async(res)=>{
                const userdata = await decrypt(res.result);
                localStorage.setItem("jwtToken",res.token);
                setAuthorizationToken(res.token);
                resolve(userdata);
            })
            .catch((e) =>{
                reject(e);//it will indicate that api call failed
            });
        })
}


export function decrypt(text){
   const key = "}C(YMgg}bP6=.)vPxU2cd*&2Jr>Zv<H'";
   let textParts = text.split(':');
   let iv = Buffer.from(textParts.shift(),'hex');
   let encryptedText = Buffer.from(textParts.join(':'),'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key),iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted ,decipher.final()]);
   return decrypted.toString();
   //return decrypted.toString();
 }


 function setTokenHeaders(token){
    if(token){
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common["Authorization"];
    }
}


 function setAuthorizationToken(token){
    setTokenHeaders(token);
}