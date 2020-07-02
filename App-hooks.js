import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default () => {
  const [count, setCount] = useState(0);
  const [isCountToTen, setCountToTen] = useState(false);
  const [message, setMessage] = useState(`Total click: ${count}`);
  function increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    alert('State is updating');
  });

  useEffect(() => {
    alert('On load');
  }, []);

  useEffect(() => {
    if (isCountToTen === false) {
      return;
    }
    alert('You can click me 10 times');
  }, [isCountToTen]);

  useEffect(() => {
    setMessage(`Update count to : ${count}`);
    if (count === 10) {
      setCountToTen(true);
    }
  }, [count]);

  return (
    <View style={styles.fullScreen}>
      <View style={styles.topScreen}>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.defaultFontSize}>Click me!</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, backgroundColor: '#FFf'}}>
        <Text style={{fontSize: 25}}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultFontSize: {
    fontSize: 25,
  },
  fullScreen: {
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',
    flex: 1,
  },
  topScreen: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
