import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import ShopListContext from './ShopListContext';

const Item = props => {
  const {index, item} = props;
  return (
    <ShopListContext.Consumer>
      {({handleSelectItem, selectedItem}) => {
        return (
          <TouchableOpacity onPress={() => handleSelectItem(item)}>
            <Text
              key={index}
              style={StyleSheet.flatten([
                styles.item,
                selectedItem === item && styles.active,
              ])}>
              {index} - {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    </ShopListContext.Consumer>
  );
};
export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#DDD',
    padding: 10,
    textAlign: 'center',
    margin: 5,
  },
  active: {
    backgroundColor: 'green',
  },
});
