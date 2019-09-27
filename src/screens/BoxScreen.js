/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BoxScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm BoxScreen</Text>
  </View>
);

export default BoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
