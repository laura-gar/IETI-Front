import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateBefore } from '@mui/icons-material';
import { UserContext } from '../../../context/UserContext';

const useLogin = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [jwt, setJwt] = useState(""); 
    const navigate = useNavigate(); 

    function sendLoginRequest() {
        try{
            fetch("http://192.168.1.60:2703/api/v1/auth", {
                headers: {
                    "Content-Type": "application/json", 
                }, 
                method: "post", 
                body: JSON.stringify({email, password}),
            })
                .then((response) => Promise.all([response.json(), response.header]))
                .then(([body, headers]) => {
                    console.log(body.token); 
                    setJwt(body.token); 
                    navigate("/home"); 
                });
                
        }catch(error){
            if(error.response.status === 500) {console.log("ERROR");}

        }
         
    }
    
    return {
        email,
        setEmail, 
        password,
        setPassword, 
        jwt, 
        setJwt, 
        sendLoginRequest
    }
}

export default useLogin;