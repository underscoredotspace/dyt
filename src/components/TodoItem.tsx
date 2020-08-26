import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Todo } from '../screens/TodoList';
import theme from '../theme';
import { Row } from './primitives';

const style = StyleSheet.create({
  todoItem: {
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.teal[300],
  },
});

interface TodoItemProps extends Todo {
  setDone: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ done, text, setDone }) => {
  return (
    <Row style={style.todoItem}>
      <CheckBox
        style={{ marginHorizontal: theme.spacing[2] }}
        disabled={false}
        value={done}
        onValueChange={setDone}
      />

      <Text
        style={{
          paddingVertical: theme.spacing[4],
          fontSize: theme.fontSize.xl,
        }}
      >
        {text}
      </Text>
    </Row>
  );
};
