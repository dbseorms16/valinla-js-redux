import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <div>
      <h1>To DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button>
      </form>
    </div>
  );
};
function getCurrentState(state, ownProps) {
  console.log(state, ownProps);
  return { sol: true };
}
export default connect(getCurrentState)(Home);
