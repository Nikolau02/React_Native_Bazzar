/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Text, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { produtos } from '../styles/index';

export default function Categorias({ navigation }) {

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
        {
            uri: require('../images/bermudaM3.jpg'),
            nome1: 'Bermuda ',
            nome2: 'Branca',
            preco: 'R$ 60,00',
        },
        {
            uri: require('../images/bermudaM4.jpg'),
            nome1: 'Bermuda ',
            nome2: 'de Banho',
            preco: 'R$ 40,00',
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
        {
            uri: require('../images/camisaM3.jpg'),
            nome1: 'Camisa ',
            nome2: 'Preta',
            preco: 'R$ 50,00',
        },
        {
            uri: require('../images/camisaM4.jpg'),
            nome1: 'Camisa ',
            nome2: 'Branca',
            preco: 'R$ 60,00',
        },
    ];

    const calçasF = [
        {
            uri: require('../images/calsaF2.jpg'),
            nome1: 'Calça ',
            nome2: 'Rosa',
            preco: 'R$ 65,00',
        },
        {
            uri: require('../images/calsaF3.jpg'),
            nome1: 'Calça ',
            nome2: 'Preta',
            preco: 'R$ 60,00',
        },
        {
            uri: require('../images/jeansF.jpg'),
            nome1: 'Jeans ',
            nome2: 'Rasgado',
            preco: 'R$ 70,00',
        },
        {
            uri: require('../images/calsaF4.jpg'),
            nome1: 'Jeans ',
            nome2: 'Normal',
            preco: 'R$ 70,00',
        },
    ];

    const camisasF = [
        {
            uri: require('../images/camisaF.jpg'),
            nome1: 'Camisa ',
            nome2: 'Coração',
            preco: 'R$ 65,00',
        },
        {
            uri: require('../images/camisaF2.jpg'),
            nome1: 'Camisa ',
            nome2: 'Preta',
            preco: 'R$ 60,00',
        },
        {
            uri: require('../images/camisaF3.jpg'),
            nome1: 'Camisa ',
            nome2: 'Leave the Road',
            preco: 'R$ 70,00',
        },
        {
            uri: require('../images/camisaF4.jpg'),
            nome1: 'Camisa ',
            nome2: 'Branca',
            preco: 'R$ 50,00',
        },
    ];

    function Listagem({item}) {
        return (
            <View style={produtos.cardProdutos}>
                <Image style={produtos.image} source={item.uri} />
                <Text style={produtos.produtosText}>{item.nome1}</Text>
                <Text style={produtos.produtosText}>{item.nome2}</Text>
                <Text style={produtos.produtosText}>{item.preco}</Text>
                <TouchableOpacity
                    style={produtos.btnDetalhes}
                    onPress={() => navigation.navigate('Detalhes', {
                        uri: item.uri,
                        nome: item.nome1 + item.nome2,
                        tamanhos: 'P, M, G & GG',
                        preco: item.preco,
                    })}>
                    <Text style={produtos.btnText}>Detalhes</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView>
            <Text style={produtos.titulo}>Moda Masculina</Text>
            <Text style={produtos.titulo}>Bermudas</Text>
            <View style={produtos.container} horizontal={true}>
                <FlatList
                    data={bermudasM}
                    renderItem={({ item }) => Listagem({ item })}
                    horizontal={true}
                />
            </View>
            <Text style={produtos.titulo}>Camisas</Text>
            <View style={produtos.container} horizontal={true}>
                <FlatList
                    data={camisasM}
                    renderItem={({ item }) => Listagem({ item })}
                    horizontal={true}
                />
            </View>
            <Text style={produtos.titulo}>Moda Feminina</Text>
            <Text style={produtos.titulo}>Calças</Text>
            <View style={produtos.container} horizontal={true}>
                <FlatList
                    data={calçasF}
                    renderItem={({ item }) => Listagem({ item })}
                    horizontal={true}
                />
            </View>
            <Text style={produtos.titulo}>Camisas</Text>
            <View style={produtos.container} horizontal={true}>
                <FlatList
                    data={camisasF}
                    renderItem={({ item }) => Listagem({ item })}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    );
}
