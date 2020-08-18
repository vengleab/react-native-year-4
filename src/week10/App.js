import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, Modal, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ProductModel from './libs/model/ProductModel';
import AddProduct from './AddProduct';

export default () => {
  const [visible, setVisible] = useState(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    ProductModel.getAll().then(records => {
      // console.log(JSON.stringify(result.data.records));
      setProducts(records);
    });
  };

  const addProduct = () => {
    setVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <AddProduct cancel={() => setVisible(false)} onRefresh={getData} />
      </Modal>
      <Button onPress={addProduct} title="Add Product" />
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
