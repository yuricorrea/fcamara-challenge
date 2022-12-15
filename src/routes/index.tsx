import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Race} from '../screens';
import RoutePath from './RoutePath';

const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
  const noHeader = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen options={noHeader} name={RoutePath.HOME} component={Home} />
      <Stack.Screen options={noHeader} name={RoutePath.RACE} component={Race} />
    </Stack.Navigator>
  );
};

export default Routes;
