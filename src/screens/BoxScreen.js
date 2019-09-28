/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BoxScreen = ({}) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>

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
    alignItems: 'flex-end',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    position: 'absolute',
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
});
