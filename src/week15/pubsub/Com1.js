import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {RadioButton, Button, TextInput} from 'react-native-paper';
import eventPublisher from './Publisher';

export default props => {
  const [text, setText] = useState();

  return (
    <View>
      <RadioButton.Group
        onValueChange={val => {
          console.log('On item change');
          // eventPublisher.notify('CHANGE_COLOR', val);
          props.changeColor(val);
        }}>
        <RadioButton.Item label="black" value="black" />
        <RadioButton.Item label="Aqua" value="aqua" />
        <RadioButton.Item label="red" value="red" />
        <RadioButton.Item label="yellow" value="yellow" />
      </RadioButton.Group>
      <TextInput onChangeText={setText} />
      <Button
        onPress={() => eventPublisher.notify('CHANGE_TEXT', text)}
        icon="camera"
        mode="contained">
        Change Text
      </Button>
    </View>
  );
};
