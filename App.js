/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';



export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}
