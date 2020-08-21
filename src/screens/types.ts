export enum ScreenName {
  HOME = "home",
  TODO_DETAIL = "todoDetail",
}

export interface Screen {
  name: ScreenName;
  component: React.FC;
  title?: string;
}
