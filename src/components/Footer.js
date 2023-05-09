/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { footer } from '../styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={footer.viewFooter}>
        <Text style={footer.texto}>Siga-nos nas Redes Sociais</Text>
        <View style={footer.viewRedes2}>
          <Image style={footer.imagesFooter} source={require('../images/logotipoFacebook.png')} />
          <Image style={footer.imagesFooter} source={require('../images/logotipoInstagram.png')} />
          <Image style={footer.imagesFooter} source={require('../images/pinterest.png')} />
          <Image style={footer.imagesFooter} source={require('../images/snapchat.png')} />
          <Image style={footer.imagesFooter} source={require('../images/twitterLogo.png')} />
        </View>
      </View>
    );
  }
}
