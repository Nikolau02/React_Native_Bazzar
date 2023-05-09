/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import {detalhes} from '../styles/index';

export default function Detalhes({ route }) {
  return (
    <ScrollView style={detalhes.viewContainer}>
      <Image style={detalhes.images} source={route.params.uri}/>
      <Text style={detalhes.titles}>{route.params.nome}</Text>
      <Text style={detalhes.titles}>{route.params.tamanhos}</Text>
      <Text style={detalhes.titles}>{route.params.preco}</Text>
    </ScrollView>
  );
}
