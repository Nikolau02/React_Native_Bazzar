/* eslint-disable prettier/prettier */
import React from 'react';
import StackNavigator from './StackNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Cartoes from '../components/Cartoes';
import Sobre from '../components/Sobre';

const icons = {
    Home: {
        name: 'home',
        color: '#000000',
        size: 30,
    },
    Categorias: {
        name: 'category',
        color: '#000000',
        size: 30,
    },
    Sobre: {
        name: 'shopping-bag',
        color: '#000000',
        size: 30,
    },
    Cartões: {
        name: 'payment',
        color: '#000000',
        size: 30,
    },
};
const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />;
                },
            })}
        >
            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen name="Categorias" component={StackNavigator} />
            <Tab.Screen name="Sobre" component={Sobre} />
            <Tab.Screen name="Cartões" component={Cartoes} />
        </Tab.Navigator>
    );
}
