import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Votacao from './components/Votacao';



export default function App() {
  return (
    <View style={styles.container}>
    <Votacao/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#282828',
    padding:10,
    textAlign:'center',
  }
});
