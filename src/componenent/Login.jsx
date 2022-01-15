import { useState } from "react";
import { useDispatch } from "react-redux";
import { login} from "../redux/User/action";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Login=()=>{
    const data=useSelector(state=>state.user);
console.log(data)
    const dispatch=useDispatch();

    const [user, setUser]=useState({username:"",password:""});
    const handleChange=(e)=>{
            setUser({...user,[e.target.name]:e.target.value});
    }
    const handleClick=()=>{
        dispatch(login())
        
    }
    if(data.token){
       
            return <Navigate to="/" ></Navigate>
       
    }
    
    return <>
    
    <div> <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
    <input type="text" placeholder="Password"  name="password" onChange={handleChange}/>
    <button onClick={handleClick}>Login</button> </div>
    {data.loading?<div>Loading......</div>:<div>{data.token}</div>}
    </>
}