import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  TextInput as CustomTextInput,
  Button as CustomButton,
} from '../week5/custom';
// import AsyncStorage from '@react-native-community/async-storage';
import ItemModel from './model/ItemModel';

export default () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [isOnload, setIsOnload] = useState(true);

  const addNewItem = async () => {
    setItems([...items, newItem]);
    // AsyncStorage.setItem('@ITEMS', JSON.stringify([...items, newItem]));
    // DefaultModel.add()
    await ItemModel.add(newItem);
  };

  const getItems = async () => {
    const result = await ItemModel.getAll();
    console.log({result});
    setItems(result);
  };

  // useEffect(() => {
  //   if (isOnload) {
  //     return;
  //   }
  //   AsyncStorage.setItem('@ITEMS', JSON.stringify(items));
  // }, [items, isOnload]);

  useEffect(() => {
    // AsyncStorage.getItem('@ITEMS')
    //   .then(result => result && setItems(JSON.parse(result)))
    //   .catch(console.log);
    setIsOnload(false);
    getItems();
  }, []);

  return (
    <View>
      <CustomTextInput
        onChangeText={item => setNewItem(item)}
        placeholder="Enter new item"
      />
      <CustomButton onClick={addNewItem}>Add new</CustomButton>
      {items.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  );
};
