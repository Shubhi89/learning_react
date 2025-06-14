import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task : "sample-task" , id: uuidv4()}]);
    let [newTodo , SetNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos ,{task : newTodo , id: uuidv4()}]);
        SetNewTodo("");
    };

    let updateTodoValue = (event) => {
        SetNewTodo(event.target.value);
    };

    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Tasks to complete</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>{todo.task}</li>
                    })
                }
            </ul>
        </div>
    );
}