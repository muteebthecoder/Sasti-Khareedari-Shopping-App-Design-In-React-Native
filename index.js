/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import MyAccount from './src/Screens/MyAccount';
import { root } from './src/Screens/root';
import Categories from './src/Screens/Categories';

AppRegistry.registerComponent(appName, () =>root);
