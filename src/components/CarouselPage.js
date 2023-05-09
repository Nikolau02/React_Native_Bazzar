/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';
import { carousel } from '../styles/index';
import AppIntroSlider from 'react-native-app-intro-slider';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;


export default class CarouselPage extends Component {
    render() {
        const carouselItems = [
            {
                key: 1,
                title: <Text style={carousel.titulo}>Descontos</Text>,
                subtitle: <Text style={carousel.subtitulo}>Imperdíveis!!</Text>,
                imgUrl: require('../images/imagemCarr11.jpg'),
                btn: <TouchableOpacity style={carousel.botao}><Text style={carousel.textBtn}>Conferir Descontos</Text></TouchableOpacity>,
            },
            {
                key: 2,
                title: <Text style={carousel.titulo}>Ande sempre</Text>,
                subtitle: <Text style={carousel.subtitulo}>na moda.!!</Text>,
                imgUrl: require('../images/imagemCarr2.jpg'),
                btn: null,
            },
        ];
        function carouselCardItem({ item }) {
            return (
                <ImageBackground imageStyle={{ borderRadius: 8, width: ITEM_WIDTH}} style={carousel.image} resizeMode={'contain'} source={item.imgUrl}>
                    <View style={carousel.containerTitle}>
                        {item.title}
                        {item.subtitle}
                    </View>
                    {item.btn}
                </ImageBackground>
            );
        }
        return (
            <View style={carousel.container}>
                <AppIntroSlider
                    renderItem={carouselCardItem}
                    data={carouselItems}
                    activeDotStyle={{
                        backgroundColor: '#933bff',
                        width: 30,
                        marginTop: 100,
                    }}
                    dotStyle={{
                        marginTop: 100,
                        backgroundColor: '#919191',
                    }}
                    nextLabel={false}
                    doneLabel={false} />
            </View>
        );
    }
}
