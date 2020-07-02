import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import ShopListContext from './ShopListContext';

const Item = props => {
  const {index, item} = props;
  const context = useContext(ShopListContext);
  return (
    <TouchableOpacity onPress={() => context.handleSelectItem(item)}>
      <Text
        key={index}
        style={StyleSheet.flatten([
          styles.item,
          context.selectedItem === item && styles.active,
        ])}>
        {index} - {item}
      </Text>
    </TouchableOpacity>
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
