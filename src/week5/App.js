import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import CheckList from './custom/CheckList';
import MyTextInput from './custom/TextInput';
import Button from './custom/Button';

export default () => {
  const clickme = () => alert('You have click me!');
  const todoList = ['Breakfast', 'Lunch', 'Dinner', 'Meeting'];
  const [checkedItems, setCheckedItem] = useState([]);
  return (
    <View style={{flexDirection: 'column'}}>
      <CheckList style={{margin: 1}} items={todoList} multiple={true} />
      {/* <CheckList items={['A', 'B', 'C']} /> */}

      <Button onClick={clickme}>Click me</Button>
      <Button onClick={clickme}>Hello world</Button>
      <Button
        onClick={clickme}
        style={{backgroundColor: 'red'}}
        textStyle={{color: 'white'}}>
        Show me
      </Button>
      <MyTextInput
        placeholder="User"
        type="text"
        onChangeText={text => alert(text)}
      />
      <MyTextInput placeholder="First name" type="text" validate={true} />
      <MyTextInput placeholder="Last name" validate={true} />
      <MyTextInput placeholder="Phone number" type="number" />
    </View>
  );
};

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
