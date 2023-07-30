import "./global.css";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Step1"
        screenOptions={{
          contentStyle: { backgroundColor: "#fff" },
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Step1" component={Step1} options={{}} />
          <Stack.Screen
            name="Step2"
            component={Step2}
            options={{
              title: "warenkorb.at",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
