import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenContainer } from "../containers/ScreenContainer";
import { useNavigation } from "../hooks";
import { ScreenName } from "./types";

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <ScreenContainer>
      <TouchableOpacity
        onPress={(): void => {
          navigate(ScreenName.TODO_DETAIL);
        }}
      >
        <Text>Hello Home</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};
