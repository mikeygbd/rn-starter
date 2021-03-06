import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Welcome!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
        />
      <Button
        title='Go To List Demo'
        onPress={() => navigation.navigate('List')}
        />
      <Button
        title='Go To Images'
        onPress={() => navigation.navigate('Image')}
        />
      <Button
        title='Counter'
        onPress={() => navigation.navigate('Counter')}
        />
      <Button
        title='Colors'
        onPress={() => navigation.navigate('Color')}
        />
      <Button
        title='Square'
        onPress={() => navigation.navigate('Square')}
        />
        <Button
          title='Text Demo'
          onPress={() => navigation.navigate('Text')}
          />
          <Button
            title='Box Demo'
            onPress={() => navigation.navigate('Box')}
            />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
