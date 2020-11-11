import React from "react";
import { Link } from "react-router-dom";

function Todo({ text, id, deleteTodo }) {
  /**
   *
   * @param {MouseEvent} e
   */
  const handleDeleteTodo = (e) => {
    deleteTodo(e.target.id);
  };

  return (
    <li>
      <Link to={`${id}`}>{text}</Link>
      <button onClick={handleDeleteTodo} id={id}>
        DEL
      </button>
    </li>
  );
}

export default Todo;
