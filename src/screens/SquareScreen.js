/* @flow weak */

import React, { useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15

// action - how to change our state object

const reducer = (state, action) => {
  //state === {red: number, green; number, blue: number }
  //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
      return { ...state, green: state.green + action.amount }
    case 'blue':
      return { ...state, blue: state.blue + action.amount }
    default:
    return state;
  }
}

const SquareScreen = ({}) => {



  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  console.log(state)




  return (
    <View style={styles.container}>
    <ColorCounter
    color="Red"
    onIncrease={() => }
    onDecrease={() => }
    />
    <ColorCounter
    color="Blue"
    onIncrease={() => }
    onDecrease={() => }
    />
    <ColorCounter
    color="Green"
    onIncrease={() => }
    onDecrease={() => }
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
