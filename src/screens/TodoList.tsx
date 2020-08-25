import React from 'react';
import { ScreenContainer } from '../containers/ScreenContainer';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  return (
    <ScreenContainer>
      <TodoItem />
    </ScreenContainer>
  );
};
