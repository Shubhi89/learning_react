import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo , SetNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos , newTodo]);
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
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    );
}