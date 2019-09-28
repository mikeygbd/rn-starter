/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BoxScreen = ({}) => (
  <View style={styles.viewStyle}>
    <View style={styles.viewOneStyle} />
    <View style={styles.viewTwoStyle} />
    <View style={styles.viewThreeStyle} />

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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    opacity: .4,
    height: 100,
    width: 100,
    borderWidth: 1,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    opacity: .4,
    height: 100,
    width: 100,
    borderWidth: 1,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  viewThreeStyle: {
    opacity: .4,
    height: 100,
    width: 100,
    borderWidth: 1,
    backgroundColor: 'purple',
  }
});
