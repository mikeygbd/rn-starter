import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ListScreen = () => {

    return (
      <View style={styles.container}>
        <Text>I'm the ListScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen
