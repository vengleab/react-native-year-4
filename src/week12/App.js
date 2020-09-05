import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';

export default () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState();
  const [confirmCode, setConfirmCode] = useState();

  const loginWithPhoneNumber = async () => {
    if (!/^\+855[0-9]{8,9}$/.test(phone)) {
      alert('Please input correct nubmer');
      return;
    }
    try {
      const confirmCode = await auth().signInWithPhoneNumber(phone);
      setConfirmCode(confirmCode);
    } catch (error) {
      console.log({error});
      alert(error);
    }
  };

  const signInWithEmailAndPassword = async () => {
    try {
      await auth().signInWithEmailAndPassword(phone, code);
      alert('Login success');
    } catch (error) {
      alert(error);
    }
  };

  const verifyCode = async () => {
    try {
      await confirmCode.confirm(code);
      alert('Login success');
    } catch (error) {
      alert('Login fail');
    }
  };

  useEffect(() => {
    const listener = auth().onAuthStateChanged(user => {
      alert('On auth state change');
      console.log({user});
    });
    return () => {
      console.log('Unload');
      listener();
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder="Phone number" onChangeText={setPhone} />
        <TextInput placeholder="Verify code" onChangeText={setCode} />

        <Button onPress={signInWithEmailAndPassword} icon="user">
          Login with email
        </Button>
        <Button onPress={loginWithPhoneNumber} icon="user">
          Login
        </Button>
        <Button onPress={verifyCode} icon="user">
          Confirm
        </Button>
      </View>
    </SafeAreaView>
  );
};
