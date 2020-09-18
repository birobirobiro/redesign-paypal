import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ActivityScreen from "./screens/ActivityScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor:"#031A6E",
        inactiveTintColor:"#A0A0A0",
        showLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
        name="Activity"
        component={ActivityScreen}
      />
    </Tab.Navigator>
  );
}

export default Routes;
