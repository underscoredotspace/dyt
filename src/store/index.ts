import { Todo, Todos } from '../screens/TodoList';

interface RootState {
  todos: Todos;
}

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

export function reducer(
  state: RootState,
  action: { type: string; payload: { id: string; todo?: Todo } }
) {
  switch (action.type) {
    case 'toggleDone':
      const newTodo = state.todos[action.payload.id];
      if (!newTodo) {
        return state;
      }

      const newState = {
        ...state,
        todos: {
          ...state.todos,

          [action.payload.id]: {
            ...newTodo,
            done: !newTodo.done,
          },
        },
      };

      return newState;
    default:
      return state;
  }
}
