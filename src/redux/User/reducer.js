import { login_faliure, login_loading, login_sucess } from "./constant";
const init={loading:false, token:false, error:false};
export const reducer=(state=init, {type, payload})=>{
    switch(type){
        case login_loading:
        return {...state, loading:true}
        case login_faliure:
            return {...state, loading:false, error:true};
        case login_sucess:
            return {...state, loading:false, token:payload}
        default:return state;
    }
}