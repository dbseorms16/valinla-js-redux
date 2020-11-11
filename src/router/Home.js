import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";
import Todo from "../components/Todo";

const Home = ({ Todos, addTodo, deleteTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div>
      <h1>To DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul>
        {Todos.map((todo) => (
          <Todo
            text={todo.text}
            id={todo.id}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

const maptoStateToProps = (state) => {
  return { Todos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreater.addTodo(text)),
    deleteTodo: (id) => dispatch(actionCreater.deleteTodo(id)),
  };
};
export default connect(maptoStateToProps, mapDispatchToProps)(Home);
