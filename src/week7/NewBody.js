import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Theme from './ThemeContext';

export default () => {
  const {isDarkMode} = useContext(Theme);

  return (
    <>
      <Text
        style={StyleSheet.compose(
          styles.title,
          isDarkMode && darkMode.title,
        )}>
        What is Lorem Ipsum?
      </Text>
      <Text
        style={StyleSheet.compose(
          styles.body,
          isDarkMode && darkMode.body,
        )}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxHeight: 200,
    overflow: 'hidden',
    padding: 10,
  },
  body: {
    color: '#000',
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageContainer: {
    flex: 1,
  },
  content: {
    margin: 5,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const darkMode = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  image: {},
  imageContainer: {},
  content: {},
  title: {
    color: 'white',
  },
  body: {
    color: '#FFF',
  },
});
