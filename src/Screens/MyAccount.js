import { StyleSheet, Text, TextInput, Pressable, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import IcoIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import EIcon from 'react-native-vector-icons/Entypo';

const MyAccount = () => {
    return (
        <View style={{ marginHorizontal: 10 }}>
            <StatusBar backgroundColor={'#0B2035'}></StatusBar>
            <Text style={{ fontSize: 24, color: '#000', fontWeight: '700', textAlign: 'center', margin: 10 }}>My account</Text>
            <View style={{ justifyContent: 'space-between', backgroundColor: '#F24A11', flexDirection: 'row', alignItems: 'center', borderRadius: 20, padding: 20, paddingTop: 40 }}>
                <Image resizeMode='contain' style={styles.avatar} source={require('../Images/muteeblogo1.png')} />
                <View style={{ justifyContent: 'flex-start', borderWidth: 0, flex: 1 }}>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: '500', margin: 10, color: '#fff' }}>Muhammad Muteeb</Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400', margin: 10, color: '#fff' }}>39239849343</Text>
                </View>
                <Image
                    source={require('../Images/theme.png')}
                    alignSelf={'center'}
                    resizeMode='stretch'
                    style={{ width: 50, height: 50, borderRadius: 20 }}
                ></Image>
            </View>
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#F24A11', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, width: '100%', height: 30, marginTop: 20 }}></View>
                <ScrollView
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{ flexDirection: 'row', position: 'relative', top: -30 }}
                >
                    <View style={[{ justifyContent: 'center', marginLeft: 10 }]}>
                        <View style={styles.cardView}>
                            <AIcon name={'folderopen'} color={'#fff'} size={22} style={{ padding: 10 }}></AIcon>
                            <Text style={{ color: '#fff', textAlign: 'right' }}>Amount{'\n'}Rs 0.00</Text>
                        </View>
                        <Text style={styles.cardText}>Wallet</Text>
                    </View>
                    <View style={[{ justifyContent: 'center', marginHorizontal: 10, width: 130 }]}>
                        <View style={styles.cardView}>
                            <Icon5 name={'medal'} color={'#fff'} size={22} style={{ padding: 10, }}></Icon5>
                            <Text style={{ color: '#fff', textAlign: 'right' }}>Point{'\n'}0</Text>
                        </View>
                        <Text style={styles.cardText}>Loyallty Point</Text>
                    </View>
                    <View style={[{ justifyContent: 'center', marginRight: 10 }]}>
                        <View style={styles.cardView}>
                            <AIcon name={'shoppingcart'} color={'#fff'} size={22} style={{ padding: 10 }}></AIcon>
                            <Text style={{ color: '#fff', textAlign: 'right' }}>Orders{'\n'}2</Text>
                        </View>
                        <Text style={styles.cardText}>Orders</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{ width: '96%', alignSelf: 'center', borderWidth: 1, borderStyle: 'dashed', marginBottom: 20 }}></View>
            <View>
                <TouchableOpacity style={[styles.btnOption,]}>
                    <View style={styles.btnOptionView}>
                        <AIcon name={'folderopen'} color={'#F54A0D'} size={22} style={styles.btnOptionIcon}></AIcon>
                        <Text style={styles.btnOptionText}>Track Order</Text>
                    </View>
                    <EIcon name={'chevron-right'} color={'#000000'} size={22} style={{ padding: 10 }}></EIcon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOption, { marginVertical: 10 }]}>
                    <View style={styles.btnOptionView}>
                        <AIcon name={'user'} color={'#F54A0D'} size={22} style={styles.btnOptionIcon}></AIcon>
                        <Text style={styles.btnOptionText}>Profile</Text>
                    </View>
                    <EIcon name={'chevron-right'} color={'#000000'} size={22} style={{ padding: 10 }}></EIcon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOption,]}>
                    <View style={styles.btnOptionView}>
                        <Icon name={'map-marker'} color={'#F54A0D'} size={22} style={styles.btnOptionIcon}></Icon>
                        <Text style={styles.btnOptionText}>Address</Text>
                    </View>
                    <EIcon name={'chevron-right'} color={'#000000'} size={22} style={{ padding: 10 }}></EIcon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOption, { marginVertical: 10 }]}>
                    <View style={styles.btnOptionView}>
                        <Icon5 name={'box'} color={'#F54A0D'} size={22} style={styles.btnOptionIcon}></Icon5>
                        <Text style={styles.btnOptionText}>Coupon</Text>
                    </View>
                    <EIcon name={'chevron-right'} color={'#000000'} size={22} style={{ padding: 10 }}></EIcon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOption]}>
                    <View style={styles.btnOptionView}>
                        <AIcon name={'questioncircle'} color={'#F54A0D'} size={22} style={styles.btnOptionIcon}></AIcon>
                        <Text style={styles.btnOptionText}>General</Text>
                    </View>
                    <EIcon name={'chevron-right'} color={'#000000'} size={22} style={{ padding: 10 }}></EIcon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOption, { marginVertical: 10 }]}>
                    <View style={styles.btnOptionView}>
                        <IcoIcon name={'settings'} color={'#F54A0D'} size={22} style={styles.btnOptionIcon}></IcoIcon>
                        <Text style={styles.btnOptionText}>Settings</Text>
                    </View>
                    <EIcon name={'chevron-right'} color={'#000000'} size={22} style={{ padding: 10 }}></EIcon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyAccount

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    headerText: {
        fontSize: 18,
        color: '#000'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    cardView: { backgroundColor: '#FF6E3E', justifyContent: 'space-between', padding: 15, borderRadius: 12, height: 85, flexDirection: 'row' },
    btnOption: {
        justifyContent: 'space-between', flexDirection: 'row',
    },
    btnOptionView: { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
    btnOptionIcon: { padding: 10, backgroundColor: '#FEEDE7', borderRadius: 10 },
    btnOptionText: { fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'center', marginLeft: 10 },
    cardText: {
        fontSize: 16, color: '#000', textAlign: 'center'
    },
})