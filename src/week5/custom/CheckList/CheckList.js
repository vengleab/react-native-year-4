import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import checkIcon from './checkIcon.jpg';
import {CheckedItem, UncheckedItem} from './Item';

const CheckList = ({items, multiple, ...props}) => {
  const [checkedItems, setCheckedItem] = useState([]);

  const onCheckItem = item => {
    if (checkedItems.includes(item)) {
      return setCheckedItem(
        checkedItems.filter(checkedItem => checkedItem !== item),
      );
    }
    if (multiple) {
      setCheckedItem([...checkedItems, item]);
    } else {
      setCheckedItem([item]);
    }
  };

  return (
    <View
      {...props}
      style={StyleSheet.compose(
        styles.container,
        props.style,
      )}>
      {items.map(item => (
        <TouchableOpacity onPress={() => onCheckItem(item)}>
          {checkedItems.includes(item) ? (
            <CheckedItem item={item} />
          ) : (
            <UncheckedItem item={item} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

CheckList.defaultProps = {
  items: [],
};

export default CheckList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
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
