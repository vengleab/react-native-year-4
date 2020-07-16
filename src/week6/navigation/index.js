import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../screen/Home';
import AboutUs from '../screen/AboutUs';
import Login from '../screen/Login';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// snake case with upper case for constant
export const SCREEN_NAME = {
  LOGIN: 'Login',
  HOME: 'Home',
  ABOUT_US: 'AboutUs',
};

const styles = StyleSheet.create({
  drawIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
});

const OpenDraw = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={navigation.openDrawer}>
      <View style={styles.drawIcon}>
        <Text>open</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.LOGIN}
      screenOptions={screenProps => ({
        headerTitleAlign: 'center',
        headerTintColor: 'red',
        headerTitleStyle: {
          fontSize: 10,
        },
        headerLeft: props => <OpenDraw {...props} />,
        headerRight: props => {
          if (!screenProps.navigation.canGoBack()) {
            return '';
          }
          return (
            <HeaderBackButton
              {...props}
              onPress={() => {
                screenProps.navigation.goBack();
              }}
            />
          );
        },
      })}>
      <Stack.Screen
        name={SCREEN_NAME.HOME}
        component={Home}
        options={{title: 'Home page'}}
      />
      <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
      <Stack.Screen
        name={SCREEN_NAME.ABOUT_US}
        component={AboutUs}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={SCREEN_NAME.LOGIN}
        drawerContent={CustomDrawerContent}
        drawerContentOptions={{
          activeTintColor: '#F00',
        }}>
        <Drawer.Screen name={SCREEN_NAME.ABOUT_US} component={AboutUs} />
        <Drawer.Screen name={SCREEN_NAME.LOGIN} component={StackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{
            uri:
              'https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg',
          }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
