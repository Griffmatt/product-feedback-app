import React, { useState } from "react";

import { selectUser } from "../redux/userSlice";

import { useSelector, useDispatch } from "react-redux";

import { addComment } from "../redux/suggestionsSlice";

import { suggestions } from "../utilities/interfaces";
import { generateKey } from "../utilities/generateKey";

interface props {
  suggestion: suggestions
}

function AddComment({ suggestion }: props) {
  const [commentLength, setCommentLength] = useState(0);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const input = document.getElementById("comment") as HTMLInputElement;

  const handlePost = () => {
    if (commentLength > 0) {
      dispatch(
        addComment({
          feedbackId: suggestion.id,
          id: generateKey("C"),
          content: input.value,
          user: {
            image: user.image,
            name: user.name,
            username: user.username,
          },
          replies: [],
        })
      );
      input.value = ""
    }
  };

  return (
    <div className="add-comment">
      <h3>Add Comment</h3>
      <textarea
        className="input-field input-field__text-area"
        id="comment"
        placeholder="Type your comment here"
        maxLength={250}
        onChange={(e) => setCommentLength(e.target.value.length)}
      />
      <div className="add-comment__post">
        <p className="p-1">{250 - commentLength} Characthers left</p>
        <button className="button button--purple" onClick={handlePost}>
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
