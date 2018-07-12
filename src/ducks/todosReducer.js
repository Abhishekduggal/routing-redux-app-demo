const initialState = {
  todos: ["laundry", "get food", "wash cars", "take out trash"]
};

const DELETE_TODO = "DELETE_TODO";

export function deleteTodo(todo) {
  console.log(todo);
  return {
    type: DELETE_TODO,
    payload: todo
  };
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO:
      return {
        todos: state.todos.filter(e => !e.includes(action.payload))
        // todos: state.todos.splice(action.payload, 1)
      };
    default:
      return state;
  }
}
