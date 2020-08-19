import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { screens } from "./src/screens";

const Stack = createStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {screens.map((screen) => (
        <Stack.Screen
          key={`screen-${screen.name}`}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
