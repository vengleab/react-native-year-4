import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import ListContext from './ListContext';

export default class ShopList extends React.Component {
  // static contextType = ShopListContext;
  render() {
    const context = this.context;
    return (
      <FlatList data={context} renderItem={props => <Item {...props} />} />
    );
  }
}

ShopList.contextType = ListContext;
