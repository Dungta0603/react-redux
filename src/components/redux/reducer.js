const intState = {
  filters: {
    search: "",
    status: "All",
    prioriry: [],
  },
  todoList: [
    { id: 1, name: "learn yoga", completed: false, prioriry: "High" },
    { id: 2, name: "learn yoga", completed: false, prioriry: "Medium" },
    { id: 3, name: "learn yoga", completed: false, prioriry: "Low" },
  ],
};

const rootReducer = (state = intState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/addTodo ":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
