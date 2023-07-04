import { Component } from "react";
import App  from "./App";
import Splash from "./components/splash";
import { AppRegistry } from "react-native";
import login from "./components/login";
import { NavigationContainer } from '@react-navigation/native';
import { Header } from "react-native/Libraries/NewAppScreen";
AppRegistry.registerComponent('bai1',() => login)

const Stack = createNaviveStackNavigator();

export default RootComponent = function(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{HeaderShown: false}}>
                <Stack.Screen name="Login" component={login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
