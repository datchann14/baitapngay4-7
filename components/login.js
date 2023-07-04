import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,
        TouchableWithoutFeedback, StatusBar,
        TextInput, SafeAreaView, Keyboard, 
        TouchableOpacity, KeyboardAvoidingView } from 'react-native'  
export default class login = {{navigation}} => {
    render() {
        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior='padding' style={Styles.container}>
                    <TouchableWithoutFeedback style={Styles.container} 
                            onPress={Keyboard.dismiss}>
                        <View style={Styles.logoContainer}>
                            <View style={Styles.logoContainer}>
                                <Image style={Styles.logo}
                                    source = {require('../Images/logo.png')}>
                                </Image>
                                <Text style={Styles.title}>Account Information</Text>
                            </View>
                            <View style={Styles.inforContainer}>
                                <TextInput style ={Styles.input}
                                    placeholder='Enter Unsername/Email'
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    KeyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing= {() =>this.ref.txtPassword.forcus()}
                                />
                                <TextInput style={Styles.input}
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={Styles.buttonContainer}>
                                    <Text style={Styles.buttonText}>SIGN IN</Text>
                                    onPress={{} =>{
                                        navigation.naviges{'Home'};
                                    }
                                }
                                </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView> 
        </SafeAreaView>)
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer:{
        alignItems: 'Center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 56,
    },
    title: {
        color: 'f7c744',
        fontSize: 18,
        textAlign: 'Center',
        marginTop: 5,
        opacity: 0.9,
    },
    inforContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        //backgroundColor: 'red'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight:'bold',
        fontSize: 18
    }
})