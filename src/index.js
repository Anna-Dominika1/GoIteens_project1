import './sass/main.scss';
import { error, success} from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaults.delay = 5000;
const debounce = require('lodash.debounce');
import * as apiFunctions from 'apiFunctions.js';