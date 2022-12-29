const intState = {
  filters: {
    search: "",
    status: "All",
    prioriry: [],
  },
  todoList: [
    { id: 1, name: "learn yoga", completed: false, prioriry: "High" },
    { id: 2, name: "myu todo", completed: false, prioriry: "Medium" },
    { id: 3, name: "comtam", completed: false, prioriry: "Low" },
    { id: 4, name: "ka ta", completed: false, prioriry: "Low" },
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
    case "filter/searchFilterchange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
