import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { Row } from '../components/primitives';
import { ScreenContainer } from '../containers/ScreenContainer';
import { Dispatch } from '../store';
import theme from '../theme';

interface TodoAddProps {
  dispatch: Dispatch;
}

const style = StyleSheet.create({
  labelText: {
    fontSize: theme.fontSize.xl,
  },
  textInput: {
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[1],
    backgroundColor: theme.colors.gray[300],
    borderRadius: 4,
    borderWidth: 2,
    flexGrow: 2,
  },
  textInputRow: {
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing[2],
  },
  addTodoRow: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  addTodo: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[1],
    backgroundColor: theme.colors.blue[800],
    borderRadius: 4,
  },
  addTodoText: {
    color: theme.colors.gray[100],
    fontWeight: 'bold',
  },
});

export const TodoAdd: React.FC<TodoAddProps> = ({ dispatch }) => {
  const [todoText, setTodoText] = useState('');
  const { goBack } = useNavigation();

  return (
    <ScreenContainer>
      <Row style={style.textInputRow}>
        <Text style={style.labelText}>Todo: </Text>
        <TextInput
          style={style.textInput}
          value={todoText}
          onChangeText={setTodoText}
        />
      </Row>

      <Row style={style.addTodoRow}>
        <Pressable
          style={style.addTodo}
          onPress={() => {
            dispatch({
              type: 'addTodo',
              payload: {
                todo: {
                  done: false,
                  text: todoText,
                },
              },
            });
            goBack();
          }}
        >
          <Text style={[style.labelText, style.addTodoText]}>Add todo</Text>
        </Pressable>
      </Row>
    </ScreenContainer>
  );
};
