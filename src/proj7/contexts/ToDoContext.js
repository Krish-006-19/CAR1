import { createContext , useContext } from "react";


export let ToDoContext = createContext({
    todos:[{
        id:1,
        todo:'todo1',
        completed: false
    }],
    addToDo: (todo)=>{},
    updateToDo: (id,todo)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id)=>{}
});



export let ToDoProvider = ToDoContext.Provider;

export let useToDo=()=>{
    return useContext(ToDoContext);
}