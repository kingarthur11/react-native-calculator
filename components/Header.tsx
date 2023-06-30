import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type GreetingProps = {
  name: string;
};

const Header = (props: GreetingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic calculator {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fec89a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default Header;
