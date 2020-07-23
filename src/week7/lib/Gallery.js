import ImagePicker from 'react-native-image-picker';

class Gallery {
  options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  openCamera(config = {}) {
    return new Promise((resolve, reject) => {
      ImagePicker.launchCamera(this.options, res => {
        console.log(res);
        if (res.error) {
          reject(res.error);
        } else if (res.didCancel) {
          if (config.onCancel) {
            config.onCancel();
          }
          resolve();
        } else {
          resolve(res);
        }
      });
    });
  }
}

export default new Gallery();
