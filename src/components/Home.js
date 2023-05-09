/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, FlatList, Text, Image } from 'react-native';
import Header from './Header';
import CarouselPage from './CarouselPage';
import { produtos } from '../styles';


export default function Home() {

    const bermudasM = [
        {
            uri: require('../images/bermudaM.jpg'),
            nome1: 'Bermuda ',
            nome2: 'Azul',
            preco: 'R$ 50,00',
        },
        {
            uri: require('../images/bermudaM2.jpg'),
            nome1: 'Bermuda ',
            nome2: 'Verde',
            preco: 'R$ 45,00',
        },
    ];

    const camisasM = [
        {
            uri: require('../images/camisaM.jpg'),
            nome1: 'Camisa ',
            nome2: 'Cinza',
            preco: 'R$ 55,00',
        },
        {
            uri: require('../images/camisaM2.jpg'),
            nome1: 'Camisa ',
            nome2: 'Branca',
            preco: 'R$ 45,00',
        },
    ];

    function Listagem({ item }) {
        return (
            <View style={produtos.cardProdutos}>
                <Image style={produtos.image} source={item.uri} />
                <Text style={produtos.produtosText}>{item.nome1}</Text>
                <Text style={produtos.produtosText}>{item.nome2}</Text>
                <Text style={produtos.produtosText}>{item.preco}</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <Header />
            <CarouselPage />
            <Text style={produtos.titulo}>Promoções Moda Masculina</Text>
            <Text style={produtos.titulo}>Bermudas em Promoção</Text>
            <View style={produtos.container} horizontal={true}>
                <FlatList
                    data={bermudasM}
                    renderItem={({ item }) => Listagem({ item })}
                    horizontal={true}
                />
            </View>
            <Text style={produtos.titulo}>Camisas em Promoção</Text>
            <View style={produtos.container} horizontal={true}>
                <FlatList
                    data={camisasM}
                    renderItem={({ item }) => Listagem({ item })}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    );
}


