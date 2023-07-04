import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => console.log('Menu button pressed')}>
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.menuButton} onPress={() => console.log('Menu button pressed')}>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      padding: 10,
      backgroundColor: 'lightgray',
      borderRadius: 5,
    },
  });
 
export default Home;



