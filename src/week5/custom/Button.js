import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const OPACITY = {
  BLUR: 0.3,
  NORMAL: 1,
};

export default props => {
  const [opacity, setOpacity] = useState(1);
  return (
    <TouchableWithoutFeedback onPress={props.onClick}>
      <View
        onTouchStart={() => setOpacity(OPACITY.BLUR)}
        onTouchEnd={() => setOpacity(OPACITY.NORMAL)}
        style={StyleSheet.flatten([styles.button, props.style, {opacity}])}>
        <Text style={props.textStyle}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0DF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    margin: 5,
    elevation: 8, // android only
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
});
