import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { TodoItem } from '../components/TodoItem';
import { ScreenContainer } from '../containers/ScreenContainer';
import { initialState, reducer } from '../store';

export interface Todo {
  done: boolean;
  text: string;
}

export type Todos = Record<string, Todo | undefined>;

export const TodoList: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ScreenContainer>
      <FlatList
        data={Object.entries(state.todos)}
        renderItem={({ item: [id, todo] }) =>
          todo ? (
            <TodoItem
              key={`todo-item-${id}`}
              setDone={() => dispatch({ type: 'toggleDone', payload: { id } })}
              {...todo}
            />
          ) : null
        }
      />
    </ScreenContainer>
  );
};
