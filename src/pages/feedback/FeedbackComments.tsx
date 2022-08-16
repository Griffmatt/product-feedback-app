import React, { useState } from "react";
import CommentReply from "./CommentReply";

import { totalComments } from "../../utilities/totalComments";
import AddReply from "./AddReply";

import { suggestions, comment } from "../../utilities/interfaces";
import ReplyToCommentButton from "../../components/ui/ReplyToCommentButton";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

interface props {
  suggestion: suggestions;
}

function FeedbackComments({ suggestion }: props) {
  const user = useSelector(selectUser);

  const [commentIndex, setCommentIndex] = useState<number | string>();
  const [replyingTo, setReplyingTo] = useState("");

  const [commentsRef] = useAutoAnimate<HTMLDivElement>();

  const handleOpenReply = (index: number | string, comment: comment) => {
    if (commentIndex === index) {
      setCommentIndex(undefined);
      return;
    }
    setReplyingTo(comment.user.username);
    setCommentIndex(index);
  };

  return (
    <div className="feedback__comments" ref={commentsRef}>
      <h3>{totalComments(suggestion.comments)} Comments</h3>
      {suggestion.comments
        ? suggestion.comments.map((comment: comment, index: number) => {
            return (
              <div key={comment.id}>
                <div className="comment">
                  <img src={comment.user.image} className="comment__image" />
                  <div className="comment__user">
                    <p className="p-1 p--bold">{comment.user.name}</p>
                    <p className="p-1">@{comment.user.username}</p>
                  </div>
                  <p className="p-1 comment__content">{comment.content}</p>
                  {user && (
                    <ReplyToCommentButton
                      comment={comment}
                      index={index}
                      handleOpenReply={handleOpenReply}
                    />
                  )}
                  <CommentReply
                    comment={comment}
                    commentIndex={index}
                    handleOpenReply={handleOpenReply}
                  />
                  {commentIndex === index ? (
                    <AddReply
                      comment={comment}
                      replyingTo={replyingTo}
                      handleOpenReply={handleOpenReply}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                {index + 1 === suggestion.comments.length ? (
                  ""
                ) : (
                  <div className="comment__divider" />
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default FeedbackComments;
