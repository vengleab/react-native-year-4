import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  state = {
    shopList: [
      'Apple',
      'Banana',
      'Potato',
      'ABC',
      'Fist',
      'Pen',
      'Pencil',
      // 'Apple',
      // 'Banana',
      // 'Potato',
      // 'ABC',
      // 'Fist',
      // 'Pen',
      // 'Pencil',
      // 'Pen',
      // 'Pencil',
      // 'Apple',
      // 'Banana',
      // 'Potato',
      // 'ABC',
      // 'Fist',
      // 'Pen',
      // 'Pencil',
    ],
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

  handleNewItem = item => {
    this.setState({
      newItem: item,
    });
  };

  renderItem = ({index, item}) => {
    return (
      <Text key={index} style={styles.item}>
        {index} - {item}
      </Text>
    );
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
        {/* <ScrollView>
          {this.state.shopList.map((item, index) => {
            return (
              <Text key={index} style={styles.item}>
                {item}
              </Text>
            );
          })}
          </ScrollView> */}
        <FlatList data={this.state.shopList} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultFontSize: {
    fontSize: 20,
  },
  item: {
    backgroundColor: '#DDD',
    padding: 10,
    textAlign: 'center',
    margin: 5,
  },
  button: {
    margin: 5,
  },
});
