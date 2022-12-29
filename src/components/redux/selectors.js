import { createSelector } from "reselect";

// export const searchText

export const todoListSelector = state => {
  const todoRemaining = state.todoList.filter(todo => {
    return todo.name.includes(state.filters.search);
  });
  return todoRemaining;
};

export const searchTextselector = state => state.filters.search;
