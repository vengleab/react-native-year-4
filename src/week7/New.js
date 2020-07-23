import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Theme from './ThemeContext';
import Body from './NewBody';

export default () => {
  const {isDarkMode} = useContext(Theme);

  // const [isDarkMode, setDarkMode] = useState(false);
  return (
    <View
      style={StyleSheet.compose(
        styles.container,
        isDarkMode && darkMode.container,
      )}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w',
          }}
        />
      </View>
      <View style={styles.content}>
        <Body />
      </View>
    </View>
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
