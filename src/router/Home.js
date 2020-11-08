import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreaters } from "../store";

const Home = ({ Todos, addTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.value);
    setText("");
  };
  return (
    <div>
      <h1>To DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul>{JSON.stringify(Todos)}</ul>
    </div>
  );
};
function mapstateToProps(state) {
  return { Todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreaters.addTodo(text)),
  };
}
export default connect(mapstateToProps, mapDispatchToProps)(Home);
