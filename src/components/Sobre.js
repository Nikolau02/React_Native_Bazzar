/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { sobre } from '../styles/index';
import Local from './Local';

export default class Sobre extends Component {
  render() {
    return (
      <ScrollView>
        <Image resizeMode={'cover'} style={sobre.image} source={require('../images/imgSobre.jpg')} />
        <View style={sobre.viewPrincipal}>
          <View style={sobre.containerTitle} >
            <Text style={sobre.containerText}>Um pouco sobre nós.</Text>
          </View>
          <View style={sobre.viewMais}>
            <Text style={sobre.titulo}>Missão</Text>
            <Text style={sobre.textoComum}>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>
          <View style={sobre.viewMais}>
            <Text style={sobre.titulo}>Visão</Text>
            <Text style={sobre.textoComum}>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>
          <View style={sobre.viewMais}>
            <Text style={sobre.titulo}>Valores</Text>
            <Text style={sobre.textoComum}>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>
          <Local />
        </View>
      </ScrollView>
    );
  }
}
