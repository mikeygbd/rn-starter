/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const TextScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm TextScreen</Text>
  </View>
);

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
