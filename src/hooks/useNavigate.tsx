import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../screens/types";

export interface NavigationParams {
  title?: string;
}

interface NavigateProps {
  route: ScreenName;
  params?: Record<string, NavigationParams>;
  title?: string;
}

type Navigate = (props: NavigateProps) => void;

interface UseNavigate {
  navigate: Navigate;
}

export const useNavigate = (): UseNavigate => {
  const { navigate: nav } = useNavigation();

  const navigate: Navigate = ({ route, params, title }) => {
    nav(route, { ...params, title });
  };

  return { navigate };
};
