import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => console.log('Button Pressed')}
        />
      <TouchableOpacity onPress={() => console.log('list pressed')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
