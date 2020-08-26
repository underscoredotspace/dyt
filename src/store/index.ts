import { Todo, Todos } from '../screens/TodoList';

export interface RootState {
  todos: Todos;
}

export type Action = { type: string; payload: { id?: string; todo?: Todo } };
export type Dispatch = (action: Action) => void;

export const initialState: RootState = {
  todos: {
    '1': {
      done: false,
      text: 'first',
    },
    '2': {
      done: true,
      text: 'second',
    },
  },
};

export function reducer(state: RootState, action: Action) {
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

      return {
        ...state,
        todos: {
          ...state.todos,

          [id]: {
            ...newTodo,
            done: !newTodo.done,
          },
        },
      };

    case 'addTodo':
      const newId = `${
        Math.max(...Object.keys(state.todos).map((s) => Number(s))) + 1
      }`;
      console.log(newId, todo);

      return {
        ...state,
        todos: {
          ...state.todos,
          [newId]: todo,
        },
      };

    default:
      return state;
  }
}
