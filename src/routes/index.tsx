import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import RoutePath from './RoutePath';

const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutePath.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
