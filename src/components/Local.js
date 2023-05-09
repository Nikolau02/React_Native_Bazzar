/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { local } from '../styles/index';

export default class Local extends Component {
    render() {
        return (
            <View style={local.viewPrincipal}>
                <View style={local.viewLocal}>
                    <Text style={local.texto}>Rua Não Sei das Quanta, n° 000, São Paulo-SP.</Text>
                </View>
                <Image style={local.image} source={require('../images/imgLocal.jpg')} />
            </View>
        );
    }
}
