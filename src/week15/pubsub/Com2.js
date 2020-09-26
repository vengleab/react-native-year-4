import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import eventPublisher from './Publisher';
import Subscriber from './Subscriber';

export default props => {
  const [text, setText] = useState('About Us');
  const [color, setColor] = useState('aqua');

  useEffect(() => {
    const subscriber = new Subscriber('CHANGE_COLOR');
    subscriber.subscribe(eventPublisher, val => {
      console.log('Change color', val);
      setColor(val);
    });

    const textChangeSubscriber = new Subscriber('CHANGE_TEXT');
    textChangeSubscriber.subscribe(eventPublisher, val => {
      console.log('Change text', val);
      setText(val);
    });

    return () => {
      console.log('On did unmount');
      subscriber.unsubscribe();
    };
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.color,
      }}>
      <Text style={{fontSize: 25}}>{text}</Text>
    </View>
  );
};
