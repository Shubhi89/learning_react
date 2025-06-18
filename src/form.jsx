import { useState } from "react"

export default function Form() {
    let [text , setText] = useState("");

    let handleTextChange = (event) => {
        setText(event.target.value);
    }
    return (
        <form>
            <label htmlFor="text">Name</label>
            <input type="text" placeholder="enter text" value={text} onChange={handleTextChange} id="text"/>
            <button>Submit</button>
        </form>
    )
}