import { useState } from "react";
import "./comment.css";
import CommentsForm from "./commentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@shubhi123",
      remarks: "nice work ! ",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => {
      return [...currComments, comment];
    });
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
            <div className="comment" key={idx}>
              <span>{comment.username}</span>
              &nbsp;&nbsp;
              <p>{comment.remarks}</p>
              <span>{comment.rating}</span>
            </div>
        ))}
      </div>
      <hr />
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
