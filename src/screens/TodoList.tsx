import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { Row } from '../components/primitives';
import { TodoItem } from '../components/TodoItem';
import { ScreenContainer } from '../containers/ScreenContainer';
import { Dispatch, RootState } from '../store';
import theme from '../theme';

export interface Todo {
  done: boolean;
  text: string;
}

export type Todos = Record<string, Todo | undefined>;

const style = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing[1],
  },
  headerText: {
    fontSize: theme.fontSize.lg,
  },
  headerTodoAdd: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[1],
    backgroundColor: theme.colors.blue[800],
    borderRadius: 4,
  },
  headerTodoAddText: {
    color: theme.colors.gray[100],
    fontWeight: 'bold',
  },
});

export const TodoListHeader: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Row style={style.header}>
      <Text style={style.headerText}>Todo List</Text>
      <Pressable
        style={style.headerTodoAdd}
        android_ripple={{ color: theme.colors.blue[400] }}
        onPress={() => navigate('todo-add')}
      >
        <Text style={[style.headerText, style.headerTodoAddText]}>+</Text>
      </Pressable>
    </Row>
  );
};

interface TodoListProps {
  state: RootState;
  dispatch: Dispatch;
}

export const TodoList: React.FC<TodoListProps> = ({ state, dispatch }) => {
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
