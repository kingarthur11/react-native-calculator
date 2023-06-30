import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Result = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#bb9457',
    position: 'relative',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
    // textAlign: 'center',
  },
});
export default Result;
