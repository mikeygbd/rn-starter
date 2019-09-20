import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = <Text> Hello to You!</Text>
  return (
      <View>
      <Text style={styles.textStyle}>I'm the ComponentsScreen component</Text>
      {greeting}
      </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});

export default ComponentsScreen
