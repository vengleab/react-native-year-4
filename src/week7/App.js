import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button} from '../week5/custom';
import ImagePicker from 'react-native-image-picker';
import Gallery from './lib/Gallery';

const options = {
  title: 'Choose your image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default () => {
  const [source, setSource] = useState({});
  const chooseImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.error) {
        return alert(response.error);
      } else if (response.didCancel) {
      } else {
        console.log('reponse.url', response.uri);
        setSource({uri: response.uri});
      }
    });
  };

  const openCamera = async () => {
    try {
      const res = await Gallery.openCamera();
      if (res) {
        setSource({uri: res.uri});
      }
    } catch (error) {
      alert(error);
    }
  };
  const openGallery = () => {
    ImagePicker.launchImageLibrary(
      {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      res => {
        if (res.error) {
          return alert(res.error);
        } else if (res.didCancel) {
        } else {
          console.log('reponse.aurl', res.uri);
          setSource({uri: res.uri});
        }
      },
    );
  };

  useEffect(() => {
    setSource({
      uri:
        'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
      <Button onClick={chooseImage}>Choose image test</Button>
      <Button onClick={openCamera}>Open camera</Button>
      <Button onClick={openGallery}>Open Gallery</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    // justifyContent: 'flex-end',
    // position: 'relative',
  },
  image: {
    width: '100%',
    height: 400,
  },
});
