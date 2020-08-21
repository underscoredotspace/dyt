import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenContainer } from "../containers/ScreenContainer";
import { useNavigate } from "../hooks";
import { ScreenName } from "./types";

export const Home: React.FC = () => {
  const { navigate } = useNavigate();

  return (
    <ScreenContainer>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          navigate({
            route: ScreenName.TODO_DETAIL,
            title: "To Do Item Detail",
          });
        }}
      >
        <Text>Go to detail with title passed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          navigate({
            route: ScreenName.TODO_DETAIL,
          });
        }}
      >
        <Text>Go to detail with notitle</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};
