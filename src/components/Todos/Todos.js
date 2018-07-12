import React from "react";

import { connect } from "react-redux";
import { deleteTodo } from "../../ducks/todosReducer";

function Todos(props) {
  console.log(props);
  let allTodos = props.todos.map((e, i) => {
    return (
      <div key={i}>
        <h4>{e}</h4>
        <button onClick={() => props.deleteTodo(e)}>X</button>
      </div>
    );
  });
  return <div>{allTodos}</div>;
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { deleteTodo }
)(Todos);
