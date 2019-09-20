import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
      <View>
      <Text style={styles.textStyle}>I'm the ComponentsScreen component</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});

export default ComponentsScreen
