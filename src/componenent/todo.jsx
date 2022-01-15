import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add } from "../redux/todo/action";
import { Navigate } from "react-router-dom";
export const Input=()=>{
  
   
    const dispatch=useDispatch();
    const data=useSelector(state=>state.todo.todo);
    console.log(data)
    const [item, setItem]=useState("");
    const changeHandler=(e)=>{
        setItem(e.target.value);
    }
    const handleClick=()=>{
        dispatch(add({title:item, status:false}))
    }
    if(localStorage.getItem("token")===null){
        return <Navigate to="/login" ></Navigate>
    }
    
    return <>
    <input type="text" placeholder="Enter Item"  onChange={changeHandler}/>
    <button onClick={handleClick}>Add Item</button>
    
    {data.map(el=><div>{el.title}</div>)}
    </>
}