import { addTodo, removeTodo } from "./constant";
const init={todo:[]};
export const reducer=(state=init,{type, payload})=>{
    switch(type){
        case addTodo:
            return {
            ...state,todo:[...state.todo, payload]
        }
        case removeTodo:
            return {
                ...state, todo:state.todo.filter(el=>el.title!==payload)
            }
        default:return state;
    }
}