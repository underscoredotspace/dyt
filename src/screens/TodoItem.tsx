import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Row } from '../components/primitives';
import theme from '../theme';

const style = StyleSheet.create({
  todoItem: {
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.teal[300],
  },
});

export const TodoItem: React.FC = () => {
  const [done, setDone] = React.useState(false);

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
        Todo List
      </Text>
    </Row>
  );
};
