import { addTodo, removeTodo } from "./constant"

export const add=(data)=>{
    return{
        type:addTodo,
        payload:data
    }
}
export const remove=(data)=>{
    return {
        type:removeTodo,
        payload:data
    }
}