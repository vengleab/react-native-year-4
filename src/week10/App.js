import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import ProductModel from './libs/model/ProductModel';

export default () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductModel.getAll().then(records => {
      // console.log(JSON.stringify(result.data.records));
      setProducts(records);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        {products.map(product => (
          <Product
            title={product.name}
            body={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const Product = ({title, body, imageUrl}) => {
  return (
    <View style={styles.product}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    // flex: 1,
    minHeight: 200,
    flexDirection: 'row',
  },
  title: {fontWeight: 'bold'},
  body: {},
  content: {flex: 1},
  image: {
    flex: 1,
    width: '100%',
    height: 200,
  },
});
