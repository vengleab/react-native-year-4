import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles';
import Button from '../../week5/custom/Button';

export default props => {
  const goToAboutUs = () => {
    props.navigation.navigate('AboutUs');
  };

  return (
    <View>
      <Text style={Styles.defaultFontSize}>Home</Text>
      <Text style={Styles.defaultFontSize}>
        Username: {props.route?.params?.user}
      </Text>
      <Text style={Styles.defaultFontSize}>
        Password: {props.route?.params?.pass}
      </Text>
      <Button onClick={goToAboutUs}>Go to about us</Button>
    </View>
  );
};
