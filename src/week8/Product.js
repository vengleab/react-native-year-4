import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  TextInput as CustomTextInput,
  Button as CustomButton,
} from '../week5/custom';
import shortId from 'short-uuid';

export default () => {
  const [product, setPorduct] = useState('');
  const [qty, setQty] = useState('');
  const [products, setProducts] = useState([]);

  const addNewProduct = () => {
    const newProduct = {name: product, qty, id: shortId.generate()};
    setProducts([...products, newProduct]);
  };

  return (
    <View>
      <CustomTextInput
        onChangeText={product => setPorduct(product)}
        placeholder="Enter product name"
      />
      <CustomTextInput
        onChangeText={qty => setQty(qty)}
        placeholder="Enter Qty"
      />
      <CustomButton onClick={addNewProduct}>Add new</CustomButton>
      {products.map(item => (
        <Text key={item.id}>{`${item.id}      -      ${item.name}     -      ${
          item.qty
        }`}</Text>
      ))}
    </View>
  );
};
