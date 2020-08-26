import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { TodoAdd } from './src/screens/TodoAdd';
import { TodoList, TodoListHeader } from './src/screens/TodoList';
import { initialState, reducer } from './src/store';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

export default App;
