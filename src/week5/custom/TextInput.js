import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const validation = {
  number: {
    validate: val => {
      return /[0-9]{9,10}/.test(val) && val.length <= 10;
    },
    message: 'Only numbers are allowed',
  },
  text: {
    validate: val => {
      return /[A-Za-z]/.test(val);
    },
    message: 'Only character A-Z and a-z are allowed',
  },
};

const MyTextInput = props => {
  const [hasError, setHasError] = useState(false);
  const validator = validation[props.type] || validation.text;

  const validate = val => {
    return validator.validate(val);
  };

  return (
    <>
      <TextInput
        {...props}
        onChangeText={txt => {
          txt ? setHasError(!validate(txt)) : setHasError(false);
          props.onChangeText(txt);
        }}
      />
      {props.validate && hasError && (
        <Text style={styles.error}>{validator.message}</Text>
      )}
    </>
  );
};

MyTextInput.defaultProps = {
  onChangeText: () => {},
};

export default MyTextInput;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
