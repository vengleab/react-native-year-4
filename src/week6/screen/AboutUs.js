import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../week5/custom/Button';
import Styles from '../styles';
import {SCREEN_NAME} from '../navigation';

export default props => {
  const back = () => {
    props.navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.LOGIN}],
    });
  };

  return (
    <View>
      <Text style={Styles.defaultFontSize}>About us</Text>
      <Button onClick={back}>Reset</Button>
    </View>
  );
};
