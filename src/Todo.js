import React from 'react'
import { useState } from "react";


export default function Todo({ todo, toogleTodo, removeTodo }) {

    function HandleTodoClick(){
        toogleTodo(todo.id)
    }

    function HandleRemoveClick(){
        removeTodo(todo.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={HandleTodoClick} />
                {todo.name}
            </label>
            <button onClick={HandleRemoveClick}>X</button>
        </div>
    )
}


