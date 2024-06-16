import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { ListRunes, OwnedRunes } from "@screens";
import { Screens } from "./types";
import { TabBarIcon } from "@components";

const Tab = createBottomTabNavigator();

export function AppRoutesStack() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon
            name={route.name as Screens}
            focused={focused}
            color={color}
            size={size}
          />
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors['primary-01'],
        tabBarStyle: {
          borderColor: colors['surface-01'],
          backgroundColor: colors["surface-01"],
          height: 75,
        },
        tabBarTestID: `tab-bar-icon-container-${route.name}`
      })}>
      <Tab.Screen name={Screens.ListRunes} component={ListRunes} />
      <Tab.Screen name={Screens.OwnedRunes} component={OwnedRunes} />
    </Tab.Navigator >
  );
}
