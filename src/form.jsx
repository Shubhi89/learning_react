import { useState } from "react"

export default function Form() {
    let [text , setText] = useState("shubhi");

    let handleTextChange = (event) => {
        setText(event.target.value);
    }
    return (
        <form>
            <input type="text" placeholder="enter text" value={text} onChange={handleTextChange}/>
            <button>Submit</button>
        </form>
    )
}