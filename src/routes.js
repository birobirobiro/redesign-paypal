import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#021A6E" size={30} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default Routes;
