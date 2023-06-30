import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import Result from './Result';

const NumberView = () => {
  const [f_numValue, setF_NumValue] = useState('0');
  const [s_numValue, setS_NumValue] = useState('0');
  const [numValue, setNumValue] = useState('0');
  const [operValue, setOperValue] = useState('');
  const [isOperValue, setIsOperValue] = useState(false);
  const [isPerformCalc, setIsPerformCalc] = useState(false);
  const HandleTap = value => {
    if (
      f_numValue === '0' &&
      s_numValue === '0' &&
      (value === '-' || value === '+' || value === 'x' || value === '/')
    ) {
      return;
    }
    if (numValue.length > 0) {
      const res = numValue.charAt(numValue.length - 1);
      if (
        (res === '-' && value === '-') ||
        (res === '+' && value === '+') ||
        (res === 'x' && value === 'x') ||
        (res === '/' && value === '/')
      ) {
        return;
      }
    }
    if (value !== '-' && value !== '+' && value !== '/' && value !== 'x') {
      if (isOperValue) {
        setF_NumValue(f_numValue === '0' ? value : f_numValue + value);
      } else {
        setS_NumValue(s_numValue === '0' ? value : s_numValue + value);
      }
    } else {
      setIsOperValue(true);
      setOperValue(value);
    }
    if (
      isPerformCalc &&
      value !== '-' &&
      value !== '+' &&
      value !== '/' &&
      value !== '*'
    ) {
      setNumValue(value);
      setIsPerformCalc(false);
    } else {
      setNumValue(numValue === '0' ? value : numValue + value);
    }
  };
  const backspace = () => {
    setNumValue(numValue.slice(0, -1) === '' ? '0' : numValue.slice(0, -1));
  };
  const performCalc = e => {
    e.preventDefault();
    if (operValue === '+') {
      setNumValue(Number(s_numValue) + Number(f_numValue));
    }
    if (operValue === '-') {
      setNumValue(Number(s_numValue) - Number(f_numValue));
    }
    if (operValue === '/') {
      setNumValue(Number(s_numValue) / Number(f_numValue));
    }
    if (operValue === 'x') {
      setNumValue(Number(s_numValue) * Number(f_numValue));
    }
    setIsPerformCalc(true);
    setOperValue('');
    setIsOperValue(false);
    setF_NumValue('0');
    setS_NumValue('0');
  };
  const reset = () => {
    setNumValue('0');
  };
  // useEffect(() => {
  //   result = numValue
  // }, [numValue]);
  return (
    <View>
      {/* <View>
        <Text style={styles.text}>{numValue}</Text>
      </View> */}
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => reset()} style={styles.text}>
              C
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('/')} style={styles.text}>
              /
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('x')} style={styles.text}>
              x
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => backspace()} style={styles.text}>
              CR
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('7')} style={styles.text}>
              7
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('8')} style={styles.text}>
              8
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('9')} style={styles.text}>
              9
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('-')} style={styles.text}>
              -
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('4')} style={styles.text}>
              4
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('5')} style={styles.text}>
              5
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('6')} style={styles.text}>
              6
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('+')} style={styles.text}>
              +
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('1')} style={styles.text}>
              1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('2')} style={styles.text}>
              2
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('3')} style={styles.text}>
              3
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={e => performCalc(e)} style={styles.text}>
              =
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text}>%</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text onPress={() => HandleTap('0')} style={styles.text}>
              0
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text}>.</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text}>of</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6804CD',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '25%',
    height: '10%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   backgroundColor: '#6804CD',
  //   flex: 1,
  //   flexDirection: 'row',
  //   height: 50,
  // },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  // text1: {
  //   color: '#ffffff',
  //   fontWeight: 'bold',
  //   backgroundColor: 'green',
  //   padding: 20,
  //   flex: 1,
  // },
  // text2: {
  //   color: '#ffffff',
  //   fontWeight: 'bold',
  //   backgroundColor: 'black',
  //   padding: 20,
  //   flex: 1,
  // },
  // text3: {
  //   color: '#ffffff',
  //   fontWeight: 'bold',
  //   backgroundColor: 'yellow',
  //   padding: 20,
  //   flex: 1,
  // },
});
export default NumberView;
