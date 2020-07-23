import React, {useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from '../week5/custom';
import New from './New';
import {ThemeProvider} from './ThemeContext';

export default () => {
  const [theme, setTheme] = useState({});
  const changeTheme = () => {
    setTheme({isDarkMode: !theme.isDarkMode});
  };

  return (
    <View style={styles.container}>
      <ThemeProvider value={theme}>
        <New />
        <Button onClick={changeTheme}>Update dark mode</Button>
      </ThemeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
  },
});
