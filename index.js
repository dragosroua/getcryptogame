/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
global.crypto = require('crypto');
//import process from 'process';
//import buffer from 'buffer';
//global.Buffer = buffer.Buffer

AppRegistry.registerComponent(appName, () => App);
