import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import LoginScreen from '../screens/Login';
import Signup from '../screens/signup';

const Stack=createNativeStackNavigator();

const RootNavigator=()=>{
    return(
  <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="SignUp"  component={Signup} />
    <Stack.Screen name="SignIn"  component={LoginScreen} />
  </Stack.Navigator>
    );
};

export default RootNavigator;