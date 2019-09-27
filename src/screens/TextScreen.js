/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const TextScreen = ({}) => (
  <View>
    <TextInput style={styles.input} />
  </View>
);

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1

  }
});
