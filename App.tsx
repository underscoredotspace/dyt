import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { TodoAdd } from './src/screens/TodoAdd';
import { TodoList, TodoListHeader } from './src/screens/TodoList';
import { reducer, RootState } from './src/store';
import localStorage from './src/store/localStorage';

const Stack = createStackNavigator();

const App: React.FC<{ rootState: RootState }> = ({ rootState }) => {
  const [state, dispatch] = React.useReducer(reducer, rootState);

  useEffect(() => {
    console.log(JSON.stringify(state.todos, null, 2));
  }, [state.todos]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="todo-list"
          options={{ headerTitle: () => <TodoListHeader /> }}
        >
          {() => <TodoList state={state} dispatch={dispatch} />}
        </Stack.Screen>
        <Stack.Screen name="todo-add">
          {() => <TodoAdd dispatch={dispatch} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  const [rootState, setRootState] = useState<RootState | null>(null);

  useEffect(() => {
    localStorage.get('todos').then((todos) => setRootState({ todos }));
  }, []);

  return rootState ? <App rootState={rootState} /> : null;
};
