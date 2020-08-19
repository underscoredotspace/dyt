import { Home } from "./Home";
import { TodoDetail } from "./TodoDetail";
import { Screen, ScreenName } from "./types";

export const screens: Screen[] = [
  {
    name: ScreenName.HOME,
    component: Home,
  },
  {
    name: ScreenName.TODO_DETAIL,
    component: TodoDetail,
  },
];
