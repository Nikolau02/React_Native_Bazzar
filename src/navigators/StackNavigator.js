/* eslint-disable prettier/prettier */
import React from 'react';
import Categorias from '../components/Categorias';
import Detalhes from '../components/Detalhes';
import Listagem from '../components/Listagem';
import Home from '../components/Home';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Categorias1" component={Categorias} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Listagem" component={Listagem} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
    );

}
