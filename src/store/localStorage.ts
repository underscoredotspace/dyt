import AsyncStorage from '@react-native-community/async-storage';
import { Todos } from '../screens/TodoList';

const set = async (key: string, value: {}): Promise<void> => {
  const jsonValue = JSON.stringify(value);
  return await AsyncStorage.setItem(key, jsonValue);
};

const get = async (key: string): Promise<Todos> => {
  const value = await AsyncStorage.getItem(key);
  if (!value) {
    return {};
  }

  const parsedValue = JSON.parse(value);

  return parsedValue.todos;
};

const localStorage = { get, set };

export default localStorage;
