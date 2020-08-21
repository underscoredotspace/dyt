import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../containers/ScreenContainer";
import { useNavigate } from "../hooks";
import { ScreenName } from "./types";

export const TodoDetail: React.FC = () => {
  const { navigate } = useNavigate();
  return (
    <ScreenContainer>
      <TouchableOpacity
        onPress={() => {
          navigate({ route: ScreenName.HOME });
        }}
      >
        <Text>Navigate Home</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};
