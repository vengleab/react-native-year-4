import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Styles from '../styles';
import Button from '../../week5/custom/Button';
import TextInput from '../../week5/custom/TextInput';
import {SCREEN_NAME} from '../navigation';
import { useNavigation } from '@react-navigation/native';

export default props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    props.navigation.navigate(SCREEN_NAME.HOME, {
      user: username,
      pass: password,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button onClick={login}>Login</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingBottom: 100,
    // alignContent: 'center',
    justifyContent: 'center',
  },
});
