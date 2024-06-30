import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Points } from "../pages/Points";
import { Details } from "../pages/Details";

type AppRoutes = {
  home: undefined;
  details: undefined;
  points: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

// const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();
const Stack = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#f0f0f5'
        }
    }}
    >
      <Stack.Screen
        name="home"
        component={Home}
      />

      <Stack.Screen
        name="points"
        component={Points}
      />

      <Stack.Screen 
        name="details"
        component={Details}
      />
    </Stack.Navigator>
  );
}