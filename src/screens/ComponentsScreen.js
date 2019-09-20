import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

  const name = "Michael Soares"

  return (
      <View>
      <Text style={styles.titleStyle}> Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}> My name is {name}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen
