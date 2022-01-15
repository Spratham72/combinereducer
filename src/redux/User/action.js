import { login_faliure, login_loading, login_sucess } from "./constant"

export const loginSuccess=(data)=>{
    return {
        type:login_sucess,
        payload:data
    }
}
export const loginLoading=()=>{
    return{
        type:login_loading
    }
}
export const loginError=(data)=>{
    return {
        type:login_faliure,
        payload:data
    }
}
export const login=()=>(dispatch)=>{
    dispatch(loginLoading());
          fetch("https://reqres.in/api/login",{
                method:"POST",  
                body:JSON.stringify({
                    email: "eve.holt@reqres.in",
                    password: "cityslicka"
                }),
               headers:{"Content-Type": "application/json"}
            }).then(res=>res.json()).then((res)=>{if(!localStorage.getItem("token")){
                localStorage.setItem("token",JSON.stringify(res.token));
            }
            else{
                localStorage.setItem("token",JSON.stringify(res.token));
            };dispatch(loginSuccess(res.token))}).catch(er=>dispatch(loginError()));
}