import { Todo, Todos } from '../screens/TodoList';
import localStorage from './localStorage';

export interface RootState {
  todos: Todos;
}

export type Action = { type: string; payload: { id?: string; todo?: Todo } };
export type Dispatch = (action: Action) => void;

export const reducer = (state: RootState, action: Action) => {
  const id = action.payload.id;
  const todo = action.payload.todo;

  switch (action.type) {
    case 'toggleDone':
      if (!id) {
        return state;
      }

      const newTodo = state.todos[id];
      if (!newTodo) {
        return state;
      }

      const toggleDoneState = {
        ...state,
        todos: {
          ...state.todos,

          [id]: {
            ...newTodo,
            done: !newTodo.done,
          },
        },
      };

      localStorage.set('todos', toggleDoneState);
      return toggleDoneState;

    case 'addTodo':
      const todoIds = Object.keys(state.todos);

      const newId =
        todoIds.length > 0
          ? `${Math.max(...todoIds.map((s) => Number(s))) + 1}`
          : 1;

      const addTodoState = {
        ...state,
        todos: {
          ...state.todos,
          [newId]: todo,
        },
      };

      localStorage.set('todos', addTodoState);
      return addTodoState;

    default:
      return state;
  }
};
