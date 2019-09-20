import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const title = <Text style={{fontSize: 45}}> Getting started with React Native!</Text>
  const name = <Text style={{fontSize: 20}}> My name is Michael Soares</Text>

  return (
      <View>
      {title}
      {name}
      </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});

export default ComponentsScreen
