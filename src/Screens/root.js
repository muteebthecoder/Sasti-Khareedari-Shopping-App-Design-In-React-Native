import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyAccount from './MyAccount';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import ProductDetails from './ProductDetails';
import Categories from './Categories';
import Login from './Login';
import Whislist from './Whislist';
import SignUp from './SignUp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="App Home" component={AppANavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Product Details" component={ProductDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AppANavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'green',
                tabBarStyle: {
                    position: 'absolute',
                    borderTopColor: 'rgba(0, 0, 0, .2)',
                    backgroundColor: '#292B49'
                },
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name={focused ? 'home' : 'home'} color={focused ? '#F54A0D' : '#fff'} size={size} focused={focused} />
                    ),
                })} />
            <Tab.Screen name="Categories" component={Categories}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <FIcon name={focused ? 'box' : 'box'} color={focused ? '#F54A0D' : '#fff'} size={size} focused={focused} />
                    ),
                })} />
            <Tab.Screen name="Whislist" component={Whislist}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name={focused ? 'heart' : 'heart-o'} color={focused ? '#F54A0D' : '#fff'} size={size} focused={focused} />
                    ),
                })} />
            <Tab.Screen name="MyAccount" component={MyAccount}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name={focused ? 'user' : 'user'} color={focused ? '#F54A0D' : '#fff'} size={size} focused={focused} />
                    ),
                })} />

        </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
});
