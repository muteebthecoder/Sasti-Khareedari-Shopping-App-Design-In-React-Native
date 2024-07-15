import { StyleSheet, Text, TextInput, Pressable, Image, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import IcoIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';

const Categories = () => {
    const data = [
        { type: 'Header' },
        { type: 'Categories1' },
        { type: 'Categories2' },
        { type: 'Products' }
    ];
    const [selectCat1, setSelectedCat1] = useState(7);
    const [productList, setProductList] = useState([])
    const [plist, setPList] = useState([
        { name: 'Sneakers Mens Casual Shoes Breathable Fashion Training Shoes Fast Shoes Sneaker', price: 4900, favourite: true, imgPath: require('../Images/shoes1.png'), category: 'women', discount: 10, rating: 4.1, stars: 4, reviews: 12 },
        { name: 'Unpaired black running shoe, Sneakers Skate shoe Nike Adidas, A sports shoes, white, sport, fashion', price: 3700, favourite: true, imgPath: require('../Images/shoes2.png'), category: 'women', discount: 20, rating: 3.4, stars: 3, reviews: 20 },
        { name: 'Nike Free Nike Air Max Sneakers Shoe, red shoes, white, outdoor Shoe, converse', price: 6200, favourite: true, imgPath: require('../Images/shoes3.png'), category: 'women', discount: 15, rating: 2.1, stars: 2, reviews: 12 },
        { name: 'Adidas Shoe Sneakers,New Fashion women shoes, purple, white, violet', price: 86000, favourite: true, imgPath: require('../Images/shoes4.png'), category: 'men', discount: 10, rating: 4.4, stars: 4, reviews: 43 },
        { name: 'Sneakers Basketball shoe Sportswear, nike shoe, outdoor Shoe, running, sneakers', price: 20000, favourite: true, imgPath: require('../Images/shoes5.png'), category: 'men', discount: 10, rating: 2.1, stars: 2, reviews: 76 },
        { name: 'Shoe Nike Free Air Force, Nike Shoes, image File Formats, fashion, outdoor Shoe', price: 8900, favourite: true, imgPath: require('../Images/shoes6.png'), category: 'men', discount: 16, rating: 4, stars: 4, reviews: 2 },
        { name: 'Nike Free Nike Air Max Air Jordan Sneakers, nike, white, outdoor Shoe, sneakers', price: 7800, favourite: true, imgPath: require('../Images/shoes7.png'), category: 'men', discount: 10, rating: 3.4, stars: 3, reviews: 28 },
        { name: 'White adidas Superstar shoes, Adidas Superstar Sneakers Shoe Adidas Originals, adidas, white, fashion, outdoor Shoe', price: 32.9, favourite: false, imgPath: require('../Images/shoes8.png'), category: 'women', discount: 20, rating: 4.4, stars: 4, reviews: 12 },
        { name: 'Sneakers Shoe Air Jordan Nike Footwear, jordan, white, orange, basketballschuh', price: 4500, favourite: false, imgPath: require('../Images/shoes9.png'), category: 'women', discount: 5, rating: 1.2, stars: 2, reviews: 10 },
        { name: 'Nike Air Max Sneakers Nike Free Air Force 1 Air Jordan, nike, blue, white, outdoor Shoe', price: 12000, favourite: false, imgPath: require('../Images/shoes10.png'), category: 'women', discount: 2, rating: 3.7, stars: 4, reviews: 16 },
        { name: 'Air Force Nike Air Max Shoe Sneakers, air force, white, fashion, converse', price: 23000, favourite: false, imgPath: require('../Images/shoes11.png'), category: 'women', discount: 10, rating: 4, stars: 4, reviews: 98 },
        { name: 'Shoe Nike Air Max Sneakers Running, running shoes, orange, outdoor Shoe, converse', price: 13000, favourite: false, imgPath: require('../Images/shoes12.png'), category: 'women', discount: 10, rating: 5, stars: 5, reviews: 34 },
        { name: 'Skate shoe Sneakers Vans Clothing Footwear, Vans oldskool, white, outdoor Shoe, sneakers', price: 9000, favourite: false, imgPath: require('../Images/shoes13.png'), category: 'women', discount: 14, rating: 3.4, stars: 3, reviews: 5 },
    ])
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const discountPirce = (price, discount) => {
        return price * (100 - discount) / 100;
    };
    const generateStars = (starCount) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <AIcon
                key={index}
                name={index < starCount ? 'staro' : 'staro'}
                color={index < starCount ? '#E55B5B' : '#000'}
                size={18}
            />
        ));
    };
    const setFavourite = (index) => {
        const updatedList = [...plist];
        updatedList[index].favourite = !updatedList[index].favourite
        setProductList(updatedList)
    }
    const renderProducts = ({ item, index }) => {
        return (
            <View>
                <Pressable onPress={() => { navigation.navigate('Product Details', { item }) }} style={{ backgroundColor: '#FDF1F3', borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 5, elevation: 0, marginBottom: 10, backgroundColor: '#fff', padding: 5, alignItems: 'center' }}>
                    <Image source={item.imgPath}
                        alignSelf={'center'}
                        resizeMode='center'
                        style={{ width: 150, height: 150, borderRadius: 20, }}
                    ></Image>
                    <Icon onPress={() => { setFavourite(index) }} name={item.favourite ? 'heart' : 'heart-o'} color={'#E55B5B'} size={18} style={{ backgroundColor: '#ffffff', position: 'absolute', top: 10, right: 10, borderRadius: 50, textAlign: 'center', padding: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        {generateStars(item.stars)}
                        <Text> {item.rating} ({item.reviews})</Text>
                    </View>
                    <Text
                        style={{ fontSize: 12, color: 'black', flexWrap: 'wrap', width: 160, textAlign: 'center' }}>
                        {item.name}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', textDecorationLine: 'line-through', }}> Rs {formatPrice(item.price)}</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#F54A0D' }}> Rs {formatPrice(discountPirce(item.price, item.discount))}</Text>
                    </View>
                </Pressable>
            </View>
        );
    }
    const renderItem = ({ item }) => {
        switch (item.type) {
            case 'Header':
                return <Text style={{ fontSize: 24, color: '#000', fontWeight: '700', textAlign: 'center', margin: 10 }}>Categories</Text>
            case 'Categories1':
                return (
                    <View style={{ marginVertical: 10, marginBottom: 25, borderWidth: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Pressable onPress={() => { setSelectedCat1(0) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 0 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/electornic.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: 'white', flexWrap: 'wrap', textAlign: 'center', width: 80 }}>Electornic & Accessories</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedCat1(1) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 1 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/men.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: '#fff', }}>Men</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedCat1(2) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 2 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/homeAppliances.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: 'white', flexWrap: 'wrap', textAlign: 'center', width: 50 }}>Home & LifeStyle</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedCat1(3) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 3 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/kids.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: '#fff', }}>Kids &{'\n'} Toys</Text>
                        </Pressable>
                    </View>
                );
            case 'Categories2':
                return (
                    <View style={{ marginVertical: 10, marginBottom: 25, borderWidth: 0, flexDirection: 'row', }}>
                        <Pressable onPress={() => { setSelectedCat1(4) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 4 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/accessories.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: 'white', }}>Accessories</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedCat1(5) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", marginHorizontal: 10, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 5 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/women.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: '#fff', }}>Women</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedCat1(6) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 6 ? '#F54A0D' : '#C1C1C1', padding: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/airpods.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: '#fff', }}>Airpods</Text>
                        </Pressable>
                        <Pressable onPress={() => { setSelectedCat1(7) }} style={{ borderWidth: 0, borderRadius: 20, justifyContent: "space-arround", margin: 0, elevation: 0, marginBottom: 10, backgroundColor: selectCat1 == 7 ? '#F54A0D' : '#C1C1C1', padding: 10, marginLeft: 10, alignItems: 'center' }}>
                            <View>
                                <Image source={require('../Images/shoes12.png')}
                                    alignSelf={'center'}
                                    resizeMode='stretch'
                                    style={{ width: 50, height: 50, borderRadius: 10 }}
                                ></Image>
                            </View>
                            <Text style={{ fontSize: 12, color: '#fff', }}>Shoes</Text>
                        </Pressable>
                    </View>
                );
            case 'Products':
                return (
                    <View style={{ marginVertical: 10, marginBottom: 25, borderWidth: 0 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={plist}
                            renderItem={renderProducts}
                            numColumns={2}
                            style={{ alignSelf: "center", paddingHorizontal: 0 }}
                        />
                    </View>
                );
            default:
                return null;
        }
    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, padding: 20 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})