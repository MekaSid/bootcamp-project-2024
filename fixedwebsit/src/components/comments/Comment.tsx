import React from "react";
import styles from "./Comment.module.css";

type IComment = {
    user: string;
    comment: string;
    time: Date;
};

type CommentProps = {
    comment: IComment;
};

function parseCommentTime(time: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    return new Date(time).toLocaleDateString("en-US", options);
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={styles.commentContainer}>
            <h4 className={styles.userName}>{comment.user}</h4>
            <p className={styles.commentText}>{comment.comment}</p>
            <span className={styles.commentTime}>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;
