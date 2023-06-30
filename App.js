import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Result from './components/Result';
import NumberView from './components/NumberView';

const App = () => {
  // const [result, setResult] = useState(0);
  return (
    <View style={styles.container}>
      <Header name="Rexxar" />
      <Result />
      <NumberView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
