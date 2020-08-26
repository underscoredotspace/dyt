import React from 'react';
import { Pressable, Text } from 'react-native';
import { ScreenContainer } from '../containers/ScreenContainer';
import { Dispatch } from '../store';

interface TodoAddProps {
  dispatch: Dispatch;
}

export const TodoAdd: React.FC<TodoAddProps> = ({ dispatch }) => {
  return (
    <ScreenContainer>
      <Pressable
        onPress={() =>
          dispatch({
            type: 'addTodo',
            payload: {
              todo: {
                done: false,
                text: 'new todo!!!',
              },
            },
          })
        }
      >
        <Text>Add todo</Text>
      </Pressable>
    </ScreenContainer>
  );
};
