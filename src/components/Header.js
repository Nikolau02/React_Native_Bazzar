/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { header } from '../styles/index';

export default class Header extends Component {
  render() {
    return(
      <View style={header.viewHeader}>
        <Text style={header.textHeader}>BAZZAR</Text>
      </View>
    );
  }
}
