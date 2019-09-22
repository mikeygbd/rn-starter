/* @flow weak */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = ({}) => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const COLOR_INCREMENT = 20

  return (
    <View style={styles.container}>
    <ColorCounter
    color="Red"
    onIncrease={() => setRed(red + COLOR_INCREMENT)}
    onDecrease={() => setRed(red - COLOR_INCREMENT)}
    />
    <ColorCounter
    color="Blue"
    onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
    onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
    />
    <ColorCounter
    color="Green"
    onIncrease={() => setGreen(green + COLOR_INCREMENT)}
    onDecrease={() => setGreen(green - COLOR_INCREMENT)}
    />
    <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />

    </View>
  )
};

export default SquareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
