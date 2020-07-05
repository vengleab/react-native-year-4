import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import ShopList from '../components/ShopList';
import ShopListContext from '../components/ShopListContext';
import ListContext from '../components/ListContext';

export default class App extends React.Component {
  state = {
    shopList: ['Apple', 'Banana', 'Potato', 'ABC', 'Fist', 'Pen', 'Pencil'],
    selectedItem: '',
  };

  addItem = () => {
    // alert(this.state.newItem);
    const {shopList, newItem} = this.state;
    if (!newItem) {
      return alert('Please input new item');
    }

    this.setState({
      shopList: [...shopList, newItem],
      newItem: '',
    });

    // this.
  };

  handleSelectItem = item => {
    this.setState({
      selectedItem: item,
    });
  };

  handleNewItem = item => {
    this.setState({
      newItem: item,
    });
  };
  render() {
    return (
      <View>
        <TextInput
          value={this.state.newItem}
          style={styles.defaultFontSize}
          placeholder="Input new item"
          onChangeText={this.handleNewItem}
        />
        <Button title="Add new item" onPress={this.addItem} />
        <Text style={styles.defaultFontSize}>Shopping List</Text>
        <ListContext.Provider value={this.state.shopList}>
          <ShopListContext.Provider
            value={{
              selectedItem: this.state.selectedItem,
              handleSelectItem: this.handleSelectItem,
            }}>
            <ShopList />
          </ShopListContext.Provider>
        </ListContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultFontSize: {
    fontSize: 20,
  },
  button: {
    margin: 5,
  },
});
