import {useColorScheme} from 'react-native';
import {IThemeType} from '../types';

const light = {
  primaryColor: '#ccd5ae',
  secondaryColor: '#e9edc9',
  tertiaryColor: '#fefae0',
  quaternaryColor: '#faedcd',
  textColor: '#000000',
  backgroundColor: '#ffffff',
};

const dark = {
  primaryColor: '#ccd5ae',
  secondaryColor: '#e9edc9',
  tertiaryColor: '#fefae0',
  quaternaryColor: '#faedcd',
  textColor: '#ffffff',
  backgroundColor: '#000000',
};

const Theme = (): IThemeType => {
  return useColorScheme() === 'light' ? light : dark;
};

export default Theme;
