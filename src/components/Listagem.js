/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { produtos } from '../styles/index';
import { createStackNavigator } from '@react-navigation/stack';
import Detalhes from './Detalhes';

const Stack = createStackNavigator();

export default function Listagem({ navigation, item }) {
    return (
        <View style={produtos.cardProdutos}>
            <Image style={produtos.image} source={item.uri} />
            <Text style={produtos.produtosText}>{item.nome1}</Text>
            <Text style={produtos.produtosText}>{item.nome2}</Text>
            <Text style={produtos.produtosText}>R$ {item.preco}</Text>
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
            <Stack.Navigator>
                <Stack.Screen name="Detalhes" component={Detalhes} />
            </Stack.Navigator>
        </View>
    );
}


