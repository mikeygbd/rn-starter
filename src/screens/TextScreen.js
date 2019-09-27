/* @flow weak */

import React, { useState }from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
  <View>
    <TextInput
    style={styles.input}
    autoCapitalize="none"
    autoCorrect={false}
    value={name}
    />
  </View>
);
}
export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1

  }
});
