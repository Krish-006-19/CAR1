import React, { useState } from 'react'
import { ToDoProvider } from './contexts';
import TodoForm from './componemnts/TodoForm';
import TodoItem from './componemnts/Todoitem';

function App7() {
  let [todos , setTodos] = useState([]);
  let addToDo =(todo)=>{
    setTodos((prev)=>[...prev,{...todo,id: Date.now()}])
  }
  let updateToDo =(id , todo)=>{
    setTodos(prevArr=>prevArr.map(prevtodo=>prevtodo.id===id?todo:prevtodo))
  }
  let deleteToDo =(id)=>{
    setTodos((prevArr)=>prevArr.filter((todo)=>todo.id !== id))
  } 
  let toggleComplete =(id)=>{
    setTodos((prevArr)=>prevArr.map((prevtodo)=>prevtodo === id? [{...prevtodo,completed: !prevtodo.completed}] : prevtodo))
  }
  return (
    <ToDoProvider value={{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                         
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App7