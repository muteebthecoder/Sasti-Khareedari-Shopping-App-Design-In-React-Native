import { StyleSheet, Text, TextInput, Pressable, Image, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import IcoIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

const Home = ({ navigation }) => {
    useEffect(() => {
        filterProductCategory('all')
    }, [])
    const data = [
        { type: 'Header' },
        { type: 'Body' },
        { type: 'Products' }
    ];
    const [selectedbtn, setSelectedBtn] = useState('all')
    const [productList, setProductList] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
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
        const updatedList = [...productList];
        updatedList[index].favourite = !updatedList[index].favourite
        setProductList(updatedList)
    }

    const filterProductCategory = (value) => {
        setSelectedBtn(value)
        if (value === 'all') {
            const sortedProducts = plist.sort((a, b) => b.price - a.price);
            setProductList(sortedProducts);
        }
        else if (value == 'topProducts') {
            const sortedProducts = plist.sort((a, b) => b.rating - a.rating);
            setProductList(sortedProducts.slice(0, 5));
        }
        else if (value == 'topselling') {
            const sortedProducts = plist.sort((a, b) => b.reviews - a.reviews);
            setProductList(sortedProducts.slice(0, 5));
        }
    }
    const filterProductList = (query) => {
        return productList.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
    };
    const renderProducts = ({ item, index }) => {
        return (
            <Animatable.View
                animation={'slideInUp'} delay={(index + 2000)} >
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
            </Animatable.View>
        );
    }
    const renderHeader = () => (
        <View style={styles.header}>
            <Pressable style={{ padding: 2 }}>
                <Image resizeMode='center' style={styles.avatar} source={require('../Images/logo_with_name.png')} />
            </Pressable>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={{ padding: 2 }}>
                    <IcoIcon name={'notifications'} color={'#F24A11'} size={20} style={{ textAlign: 'center', padding: 10 }} />
                </Pressable>
                <Pressable style={{ padding: 2 }}>
                    <Icon name={'shopping-cart'} color={'#F24A11'} size={20} style={{ textAlign: 'center', padding: 10 }} />
                </Pressable>
            </View>
        </View>
    );
    const renderBody = () => (
        <View style={{ paddingHorizontal: 20 }}>
            <Animatable.Image
                animation={'slideInUp'} delay={1000}
                resizeMode='center' style={{ width: 220, zIndex: 9, height: 220, position: 'absolute', right: -20, top: -15, }} source={require('../Images/shoes5.png')} />
            <Animatable.View
                animation={'slideInUp'} delay={1000}
                style={{ backgroundColor: '#F54A0D', borderRadius: 20, padding: 20, height: 150 }}>
                <View >
                    <Text style={{ color: '#fff' }}>Popular Now</Text>
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 24 }}>Nike Go Flyease</Text>
                    <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, width: 120, padding: 10, marginVertical: 10 }}>
                        <Text style={{ color: '#F54A0D', fontWeight: '600', fontSize: 18, textAlign: 'center' }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <Animatable.View
                animation={'slideInUp'} delay={1300}
                style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 20, paddingHorizontal: 10, marginVertical: 10 }}>
                <TextInput placeholder='Search Product' onChangeText={setSearchQuery} style={{ flex: 1 }}></TextInput>
                <Icon name={'search'} color={'#C0C0C0'} size={18} style={{ textAlign: 'center', padding: 10, backgroundColor: '#F54A0D', borderRadius: 10 }} />
            </Animatable.View>
            <Animatable.View
                animation={'slideInUp'} delay={1600}
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { filterProductCategory('all') }} style={[styles.blueBtn, { backgroundColor: selectedbtn == 'all' ? "#ffffff" : '#fff', width: '30%', paddingHorizontal: 10, paddingVertical: 10, alignSelf: 'center' }]}>
                    <Text style={[styles.blueBtnText, { fontSize: 12, fontWeight: '500', color: selectedbtn == 'all' ? '#F54A0D' : 'gray' }]}>
                        New Arrivals
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { filterProductCategory('topProducts') }} style={[styles.blueBtn, { backgroundColor: selectedbtn == 'women' ? "#ffffff" : '#fff', width: '30%', paddingHorizontal: 10, paddingVertical: 10, alignSelf: 'center' }]}>
                    <Text style={[styles.blueBtnText, { fontSize: 12, fontWeight: '500', color: selectedbtn == 'topProducts' ? '#F54A0D' : 'gray' }]}>
                        Top Products
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { filterProductCategory('topselling') }} style={[styles.blueBtn, { backgroundColor: selectedbtn == 'men' ? "#ffffff" : '#fff', width: '35%', paddingHorizontal: 10, paddingVertical: 10, alignSelf: 'center' }]}>
                    <Text style={[styles.blueBtnText, { fontSize: 12, fontWeight: '500', color: selectedbtn == 'topselling' ? '#F54A0D' : 'gray' }]}>
                        Best Sellings
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
    const renderItem = ({ item }) => {
        switch (item.type) {
            case 'Header':
                return renderHeader();
            case 'Body':
                return renderBody();
            case 'Products':
                return (
                    <View style={{ marginVertical: 10, marginBottom: 25, borderWidth: 0 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={filterProductList(searchQuery)}
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
        <View style={{ backgroundColor: '#FDF1F3', flex: 1, padding: 0 }}>
           <FlatList
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()
                }
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff', margin: 20
    },
    headerText: {
        fontSize: 18,
        color: '#000'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
  
    grayBtn: {
        fontSize: 12, backgroundColor: '#A5A7A6', color: '#ffffff', textAlign: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 25
    },
    blueBtn: {
        marginVertical: 8, backgroundColor: "#0CC0DF", alignItems: 'center', padding: 5, borderRadius: 0, borderColor: '#F54A0D', borderWidth: 1,
    },
    blueBtnText: {
        color: '#ffffff', fontSize: 18, fontWeight: '500'
    }
})