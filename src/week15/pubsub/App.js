import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Com1 from './Com1';
import Com2 from './Com2';

export default () => {
  const [color, setColor] = useState();
  const changeColor = val => {
    console.log('color');
    setColor(val);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.box}>
        <Com1 changeColor={changeColor} />
      </View>
      <View style={styles.box}>
        <Com2 color={color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    flex: 1,
  },
});
