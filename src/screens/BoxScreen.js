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
    height: 100,
    width: 100,
    borderWidth: 1,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    borderWidth: 1,
    backgroundColor: 'green',
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
    left: 150,


  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    borderWidth: 1,
    backgroundColor: 'purple',
  }
});
