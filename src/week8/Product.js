import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  TextInput as CustomTextInput,
  Button as CustomButton,
} from '../week5/custom';
import shortId from 'short-uuid';
import ProductModel from './model/ProductModel';

export default () => {
  const [product, setProduct] = useState('');
  const [qty, setQty] = useState('');
  const [products, setProducts] = useState([]);

  const addNewProduct = () => {
    const newProduct = {
      name: product,
      qty,
      id: shortId.generate(),
      tags: ['e-com', 'internal'],
    };
    ProductModel.add(newProduct);
    setProducts([...products, newProduct]);
  };

  async function init() {
    const products = await ProductModel.getAll();
    setProducts(products);
  }

  useEffect(() => {
    init();
    // ProductModel.getAll().then(setProducts);
  }, []);

  return (
    <View>
      <CustomTextInput
        onChangeText={product => setProduct(product)}
        placeholder="Enter product name"
      />
      <CustomTextInput
        onChangeText={qty => setQty(qty)}
        placeholder="Enter Qty"
      />
      <CustomButton onClick={addNewProduct}>Add new</CustomButton>
      {products.map(item => (
        <Text style={styles.item} key={item.id}>
          {`${item.id}      -      ${item.name}     -      ${item.qty}`} -{' '}
          {item.tags && JSON.stringify(item.tags)}
        </Text>
      ))}
    </View>
  );
};

const styles = {
  item: {
    fontSize: 20,
    backgroundColor: '#DDD',
    margin: 10,
  },
};
