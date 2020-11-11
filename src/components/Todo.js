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
      <Link to={`${id}`}>
        {text}
        <button onClick={handleDeleteTodo} id={id}>
          DEL
        </button>
      </Link>
    </li>
  );
}

export default Todo;
