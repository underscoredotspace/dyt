import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { NavigationParams } from "./src/hooks/useNavigate";
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
          options={({ route }) => {
            const params = route.params as NavigationParams;
            return { title: params?.title || screen.title || "" };
          }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
