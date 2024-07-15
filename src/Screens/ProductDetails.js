import { StyleSheet, Text, TextInput, Pressable, Image, ScrollView, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const ProductDetails = ({ navigation, route }) => {
    const data = route.params
    const [selectedColor, setSelectedColor] = useState('gray')
    const [selectedSize, setSelectedSize] = useState('M')
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            {/* Header */}
            <View style={styles.header}>
                <Icon onPress={() => { navigation.goBack() }} name={'angle-left'} color={'#fff'} size={30} style={{ backgroundColor: '#0B2035', width: 40, height: 40, textAlign: 'center', borderRadius: 100, textAlign: 'center', padding: 3, paddingRight: 6 }} />
                <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', fontWeight: '600' }}>Product Details   </Text>
                <View></View>
            </View>
            {/* favourite & share icons */}
            <Icon name={data.item.favourite ? 'heart' : 'heart-o'} color={'#E55B5B'} size={24} style={{ backgroundColor: '#ffffff', position: 'absolute', top: 60, right: 10, borderRadius: 50, textAlign: 'center', padding: 10 }} />
            <Icon name={'share'} color={'#E55B5B'} size={24} style={{ backgroundColor: '#ffffff', position: 'absolute', top: 95, right: 10, borderRadius: 50, textAlign: 'center', padding: 10 }} />
            {/* Product Image */}
            <Animatable.Image animation={'slideInUp'}
                source={data.item.imgPath}
                resizeMode='center'
                style={{ width: 400, height: 400, }}
            ></Animatable.Image>
            <Animatable.View
                animation={'slideInUp'} delay={500}
                style={{ backgroundColor: '#fff', paddingHorizontal: 20, borderWidth: 0, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#444444', }}>
                        {data.item.name}
                    </Text>
                </View>
                {/* Price */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 150, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#F54A0D', fontWeight: '600' }}>Rs {data.item.price} </Text>
                    <Text style={{ fontSize: 18, color: '#E57D78', backgroundColor: '#FFDADE', padding: 5, fontWeight: '600' }}> -{data.item.discount}.0 %</Text>
                </View>
                {/* Reviews */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#E57D78', padding: 5, fontWeight: '600' }}>{data.item.reviews}</Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400' }}>Reviews |</Text>
                    <Text style={{ fontSize: 14, color: '#E57D78', padding: 5, fontWeight: '600' }}>22</Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400' }}>Orders |</Text>
                    <Text style={{ fontSize: 14, color: '#E57D78', padding: 5, fontWeight: '600' }}>3</Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400' }}>Wish Listed </Text>
                </View>
                {/* COlors */}
                <View style={{ marginVertical: 5, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#444444', marginRight: 10 }}>Available Color </Text>
                        <View style={[styles.btnColor, { borderWidth: selectedColor == 'gray' ? 1 : 0, backgroundColor: selectedColor == 'gray' ? '#ffffff' : '91A1B0', borderColor: '#91A1B0', }]}>
                            <TouchableOpacity onPress={() => { setSelectedColor('gray') }} style={{ backgroundColor: '#91A1B0', borderRadius: 40, width: 25, height: 25, }}>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.btnColor, { borderWidth: selectedColor == 'red' ? 1 : 0, backgroundColor: selectedColor == 'red' ? '#ffffff' : 'B11D1D', marginHorizontal: 10, borderColor: '#B11D1D', }]}>
                            <TouchableOpacity onPress={() => { setSelectedColor('red') }} style={{ backgroundColor: '#B11D1D', borderRadius: 40, width: 25, height: 25, }}>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.btnColor, { borderWidth: selectedColor == 'black' ? 1 : 0, backgroundColor: selectedColor == 'black' ? '#ffffff' : '000000', marginHorizontal: 10, borderColor: '#000000', }]}>
                            <TouchableOpacity onPress={() => { setSelectedColor('black') }} style={{ backgroundColor: '#000000', borderRadius: 40, width: 25, height: 25, justifyContent: 'center' }}>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Size */}
                <View style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#444444', marginRight: 10 }}>Available Size</Text>
                        <TouchableOpacity onPress={() => { setSelectedSize('S') }} style={styles.btnSize}>
                            <Text style={{ fontSize: 18, color: selectedSize == 'S' ? '#E55B5B' : '#444444', textAlign: 'center' }}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedSize('M') }} style={styles.btnSize}>
                            <Text style={{ fontSize: 18, color: selectedSize == 'M' ? '#E55B5B' : '#444444', textAlign: 'center' }}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedSize('L') }} style={styles.btnSize}>
                            <Text style={{ fontSize: 18, color: selectedSize == 'L' ? '#E55B5B' : '#444444', textAlign: 'center' }}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedSize('X') }} style={styles.btnSize}>
                            <Text style={{ fontSize: 18, color: selectedSize == 'X' ? '#E55B5B' : '#444444', textAlign: 'center' }}>11</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Icon name={'shopping-cart'} color={'#F24A11'} size={26} style={{ textAlign: 'center', padding: 20 }} />
                    <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#F54A0D', padding: 12, borderRadius: 20, width: '80%', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                        <Text style={{ fontSize: 22, color: '#ffffff', fontWeight: 'bold', textAlign: 'center' }}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        alignContent: 'center',
        backgroundColor: '#ffffff', margin: 10
    },
    headerText: {
        fontSize: 18,
        color: '#000'
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50
    },
    btnColor: {
        width: 30, height: 30, borderRadius: 40, justifyContent: 'center', alignItems: 'center',
    },
    btnSize:{ backgroundColor: '#ffffff', borderRadius: 40, width: 36, height: 36, justifyContent: 'center' }
})