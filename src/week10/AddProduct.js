import React, {useState} from 'react';
import {View} from 'react-native';
import TextInput from '../week5/custom/TextInput';
import Button from '../week5/custom/Button';
import ProductModel from './libs/model/ProductModel';

export default props => {
  const [name, setName] = useState('');
  const [desc, setDes] = useState('');
  const [url, setUrl] = useState('');
  const [refresh, setRefresh] = useState(false);

  const createProduct = () => {
    // loading
    ProductModel.create({
      name,
      imageUrl: url,
      description: desc,
    }).then(() => {
      props.onRefresh();
      props.cancel();
      // stop loading
    });
  };

  return (
    <View>
      <TextInput onChangeText={setName} placeholder="Product Name" />
      <TextInput onChangeText={setDes} placeholder="Product Description" />
      <TextInput onChangeText={setUrl} placeholder="Product Image Url" />
      <Button onClick={createProduct}>Add Product</Button>
      <Button onClick={props.cancel}>Cancel</Button>
    </View>
  );
};
