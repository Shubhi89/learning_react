import { useState } from "react";
import "./comment.css";

export default function Comment() {
    let [comments , setComments] = useState([{
        username : "@shubhi123",
        remarks : "nice work ! ",
        rating : 4
    }]);
    return (
        <div>
            <h3>
                All Comments
            </h3>
            <div className="comment">
                <span>{comments[0].username}</span>
                &nbsp;&nbsp;
                <p>{comments[0].remarks}</p>
                <span>{comments[0].rating}</span>
            </div>
        </div>
    )
}