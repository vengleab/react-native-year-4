import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import checkIcon from './checkIcon.jpg';

const CheckedItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.icon} source={checkIcon} />
      <Text style={styles.itemText}>{'  ' + item}</Text>
    </View>
  );
};

const UncheckedItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text>{'         '}</Text>
      <Text style={styles.itemText}>{'  ' + item}</Text>
    </View>
  );
};

export {CheckedItem, UncheckedItem};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    margin: 5,
    padding: 10,
    height: 48,
    fontSize: 25,
  },
  itemText: {
    color: 'white',
  },
});
