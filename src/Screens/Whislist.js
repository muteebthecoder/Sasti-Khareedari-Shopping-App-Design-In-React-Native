import { StyleSheet, Text, TextInput, Pressable, StatusBar, Image, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import IcoIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import EIcon from 'react-native-vector-icons/Entypo';

const Whislist = () => {
    return (
        <View>
            <StatusBar backgroundColor={'#0B2035'}></StatusBar>
            <Text style={{ fontSize: 24, color: '#000', fontWeight: '700', textAlign: 'center', margin: 10 }}>My Whislist</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 70, paddingTop: 40 }}>
                <Icon name={'lock'} color={'#000'} size={30} style={{ backgroundColor: '#F54A0D', padding: 20, borderRadius: 100, }}></Icon>
                <Text style={{ fontWeight: '700', fontSize: 18, color: '#000', marginVertical: 20 }}>Please Login</Text>
                <Text style={{ fontSize: 16, color: '#000', marginVertical: 20 }}>You need to login to view this feature</Text>
                <Pressable style={{ backgroundColor: '#F54A0D', padding: 20, marginVertical: 20, width: '50%', borderRadius: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Sign In</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default Whislist

const styles = StyleSheet.create({})