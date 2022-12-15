import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import Provider from './src/context/state';
import {ThemeProvider} from 'styled-components';
import Theme from './src/theme';
import {LogBox, SafeAreaView} from 'react-native';

const App = (): JSX.Element => {
  LogBox.ignoreAllLogs();
  const currentTheme = Theme();

  return (
    <NavigationContainer>
      <Provider>
        <ThemeProvider theme={currentTheme}>
          <SafeAreaView />
          <Routes />
          <SafeAreaView />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
