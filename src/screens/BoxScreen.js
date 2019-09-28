/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BoxScreen = ({}) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Child #1</Text>
    <Text style={styles.textStyle}>Child #2</Text>
    <Text style={styles.textStyle}>Child #3</Text>

  </View>
);

export default BoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
});
