import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ScreenContainer } from '../containers/ScreenContainer';
import { TodoItem } from './TodoItem';

export interface Todo {
  id: string;
  done: boolean;
  text: string;
}

type Todos = Todo[];

const todos: Todos = [
  { id: '1', done: false, text: 'Get milk' },
  { id: '2', done: false, text: 'Get milk' },
  { id: '3', done: false, text: 'Get milk' },
  { id: '4', done: false, text: 'Get milk' },
  { id: '5', done: false, text: 'Get milk' },
  { id: '6', done: false, text: 'Get milk' },
  { id: '7', done: false, text: 'Get milk' },
  { id: '8', done: false, text: 'Get milk' },
  { id: '9', done: false, text: 'Get milk' },
  { id: '10', done: false, text: 'Get milk' },
  { id: '11', done: false, text: 'Get milk' },
  { id: '12', done: false, text: 'Get milk' },
  { id: '13', done: false, text: 'Get milk' },
  { id: '14', done: false, text: 'Get milk' },
  { id: '15', done: false, text: 'Get milk' },
  { id: '16', done: false, text: 'Get milk' },
  { id: '17', done: false, text: 'Get milk' },
  { id: '18', done: false, text: 'Get milk' },
  { id: '19', done: false, text: 'Get milk' },
  { id: '20', done: false, text: 'Get milk' },
  { id: '21', done: false, text: 'Get milk' },
  { id: '22', done: false, text: 'Get milk' },
  { id: '23', done: false, text: 'Get milk' },
  { id: '24', done: false, text: 'Get milk' },
  { id: '25', done: false, text: 'Get milk' },
  { id: '26', done: false, text: 'Get milk' },
  { id: '27', done: false, text: 'Get milk' },
  { id: '28', done: false, text: 'Get milk' },
  { id: '29', done: false, text: 'Get milk' },
];

export const TodoList: React.FC = () => {
  return (
    <ScreenContainer>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            key={`todo-item-${item.id}`}
            setDone={() => ({})}
            {...item}
          />
        )}
      />
    </ScreenContainer>
  );
};
