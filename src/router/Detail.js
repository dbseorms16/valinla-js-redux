import React from "react";
import { connect } from "react-redux";

function Detail({ Todo }) {
  return (
    <>
      <h1>Detail</h1>
      <h2>{Todo?.text}</h2>
      <h2>Created at {Todo?.id}</h2>
    </>
  );
}

const maptoStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    Todo: state.find((todo) => todo.id === parseInt(id)),
  };
};

export default connect(maptoStateToProps)(Detail);
