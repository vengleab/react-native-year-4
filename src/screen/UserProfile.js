import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  SafeAreaView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  state = {};

  showInfo = () => {
    const info = [
      `Your username is: ${this.state.username}`,
      `Your phone number is: ${this.state.phoneNumber}`,
      `Your address is: ${this.state.address},`,
    ];
    alert('My info\n' + info.join('\n'));
  };

  // handleInputUsername = username => {
  //   this.setState({username});
  // };

  // handleInputPhoneNumber = phoneNumber => {
  //   this.setState({phoneNumber});
  // };
  // handleInputAddress = address => {
  //   this.setState({address});
  // };

  handleInput = ({field, value}) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.inputGroup}>
            <Text style={styles.defaultFontSize}>
              User name
              </Text>
            <TextInput
              style={StyleSheet.compose(
                styles.defaultFontSize,
                styles.textInput,
              )}
              placeholder="Input your user name"
              // onChangeText={this.handleInputUsername}
              onChangeText={value =>
                this.handleInput({field: 'username', value})
              }
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.defaultFontSize}>Phone number</Text>
            <TextInput
              style={StyleSheet.compose(
                styles.defaultFontSize,
                styles.textInput,
              )}
              keyboardType="numeric"
              // onChangeText={this.handleInputPhoneNumber}
              onChangeText={value =>
                this.handleInput({field: 'phoneNumber', value})
              }
              placeholder="Input your phone number"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.defaultFontSize}>Address</Text>
            <TextInput
              style={StyleSheet.flatten([
                styles.textInput,
                styles.textArea,
                styles.defaultFontSize,
              ])}
              placeholder="Input your address"
              // onChangeText={this.handleInputAddress}
              onChangeText={value =>
                this.handleInput({field: 'address', value})
              }
              multiline={true}
            />
          </View>
          {/* <Button  title="Submit" onPress={this.showInfo} /> */}
          <TouchableOpacity onPress={this.showInfo}>
            <View style={styles.button}>
              <Text>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  defaultFontSize: {
    fontSize: 20,
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 5,
  },
  inputGroup: {
    marginVertical: 10,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF0',
    elevation: 15,
    padding: 10,
    alignItems: 'center',
    // borderColor: '#DDD',
    // borderWidth: 3,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
