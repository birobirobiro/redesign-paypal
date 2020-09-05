import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from './screens/HomeScreen'

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
    </Tab.Navigator>
  )
}

export default Routes;