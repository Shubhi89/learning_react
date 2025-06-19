import { useState } from "react";

export default function CommentsForm({addNewComment}) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 1,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    addNewComment(formData);
  };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formData.remarks}
          placeholder="Add remarks"
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        >
          Remarks
        </textarea>
        <br />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
