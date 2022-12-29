export const addTodo = data => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const searchFilterchange = text => {
  return {
    type: "filter/searchFilterchange",
    payload: text,
  };
};
