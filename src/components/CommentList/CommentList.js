import React from "react";
import { connect } from "react-redux";

export const CommentListComponent = ({ comments }) => {
  const mapComments = () =>
    comments.map((c, index) => <li key={c + index}>{c}</li>);

  return (
    <div>
      <h2>Comments</h2>
      <ul>{mapComments()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export const CommentList = connect(mapStateToProps)(CommentListComponent);
