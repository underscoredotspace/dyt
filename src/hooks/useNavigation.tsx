import { useNavigation as useReactNavigation } from "@react-navigation/native";
import { ScreenName } from "../screens/types";

type Navigate = (route: ScreenName, params?: Record<string, {}>) => void;

interface UseNavigationProps {
  navigate: Navigate;
}

type UseNavigation = () => UseNavigationProps;

export const useNavigation: UseNavigation = () => {
  const { navigate: nav } = useReactNavigation();
  const navigate: Navigate = (route, params) => {
    nav(route, params);
  };

  return { navigate };
};
