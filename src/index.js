import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

function EntryPoint() {
  return (
    <NavigationContainer>
      <>
        <StatusBar
          hidden
        />
        <Routes />
      </>
    </NavigationContainer>
  )
}

export default EntryPoint