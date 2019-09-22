import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const ColorScreen = ({}) => (
  <View style={styles.container}>
    <Button title="Add A Color"/>
  </View>
);

export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
