/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { footer } from '../styles/index';
import { sobre } from '../styles/index';

export default class Cartoes extends Component {
    render() {
        return (
            <ScrollView>
                <Image resizeMode={'cover'} style={sobre.image2} source={require('../images/pagarImg.jpg')} />
                <View style={sobre.viewMais}>
                    <Text style={sobre.titulo}>Aceitamos diversas bandeiras de cartões de crédito e débito,
                        além de pix e dinheiro em expécie.</Text>
                    <View style={footer.viewPagamentos}>
                        <View style={footer.viewRedes2}>
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/americanExpress.png')} />
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/elo.png')} />
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/hipercard.png')} />
                        </View>
                        <View style={footer.viewRedes2}>
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/mastercard.png')} />
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/pagSeguro.png')} />
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/visa.jpg')} />
                        </View>
                        <View style={footer.viewRedes2}>
                            <Image style={footer.imagesCartoes} source={require('../images/pagamentosImg/pix.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
