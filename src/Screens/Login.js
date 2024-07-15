import { StatusBar, StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = ({ navigation }) => {
    const [securePasswrod, setSecurePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [selected, setSelected] = useState(false);
    return (
        <View>
            <StatusBar backgroundColor={'#0B2035'}></StatusBar>
            <View style={{ height: '40%', paddingTop: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: '#000', fontWeight: '700', textAlign: 'center', }}>Welcome to{'\n'} Sasti Khareedari</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 0 }}>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={styles.textInputLabel}>Email</Text>
                    <View style={styles.textInputContainer}>
                        <Icon name={'envelope'} size={24} color="#555555" style={styles.textInputIcon} />
                        <View style={styles.textInputView}>
                            <TextInput placeholder='Enter Email'
                                value={email} onChangeText={(value) => setEmail(value)}
                                style={styles.textInput}>
                            </TextInput>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={styles.textInputLabel}>Password</Text>
                    <View style={styles.textInputContainer}>
                        <Icon name={'lock'} size={24} color="#555555" style={styles.textInputIcon} />
                        <View style={styles.textInputView}>
                            <TextInput placeholder='Enter Password'
                                value={password} onChangeText={(value) => setPassword(value)}
                                secureTextEntry={securePasswrod}
                                style={styles.textInput}>
                            </TextInput>
                            <Icon name={securePasswrod ? 'eye-slash' : 'eye'} size={18} color="#555555" onPress={() => { setSecurePassword(!securePasswrod) }} style={{ paddingHorizontal: 10, borderWidth: 0, textAlign: 'center', }} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 0 }}>
                        <Pressable onPress={() => { setSelected(!selected) }} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#9E9E9E', alignItems: 'center', padding: 2, borderRadius: 14, borderWidth: 0, width: 55, height: 26, marginRight: 10, }}>
                            <View style={{ width: 20, height: 20, backgroundColor: !selected ? '#fff' : '#9E9E9E', borderRadius: 100 }}></View>
                            <View style={{ width: 20, height: 20, backgroundColor: selected ? '#16C60C' : '#9E9E9E', borderRadius: 100 }}></View>
                        </Pressable>
                        <Text style={{ fontSize: 16 }}>Remember me</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: 'red' }}>Forgot password?</Text>
                </View>
                <Pressable onPress={() => { navigation.navigate('App Home') }} style={{ alignItems: 'center', padding: 20, width: '90%', margin: 20, backgroundColor: '#F24A11', borderRadius: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff', textAlign: 'center' }}>Sign In</Text>
                </Pressable>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10, marginHorizontal: 20 }}>
                    <View style={{ width: '30%', height: 1, backgroundColor: '#000' }}></View>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Or Login with</Text>
                    <View style={{ width: '30%', height: 1, backgroundColor: '#000' }}></View>
                </View>
                <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 15 }}>
                    <Image
                        source={require('../Images/google.png')}
                        alignSelf={'center'}
                        resizeMode='stretch'
                        style={{ width: 50, height: 50, borderRadius: 20 }}
                    ></Image>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', borderWidth: 0, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Continue as </Text>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: '900' }}>Guest</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', borderWidth: 0, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
                        <Text style={{ fontSize: 16, color: 'red' }}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    textInputLabel: { fontSize: 18, color: '#000', fontWeight: '600' },
    textInputIcon: { width: 40, height: 40, borderWidth: 0, paddingTop: 6, textAlign: 'center' },
    textInputContainer: {
        flexDirection: "row", justifyContent: "space-between", width: '100%',
        borderWidth: 2, alignSelf: "center",
        alignItems: "center", borderRadius: 20, marginVertical: 5
    },
    textInputView: {
        flexDirection: 'row', width: '88%', justifyContent: 'space-between',
        alignItems: "center", borderRadius: 10, borderWidth: 0
    },
    textInput: { padding: 8, borderWidth: 0, borderColor: '#000', fontSize: 18, flex: 1 }
})