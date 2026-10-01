import { createApp } from 'vue';

import Toolbar from './components/Toolbar.vue'

import buttons from "../common/buttons.js";

createApp(Toolbar, {buttons}).mount('#controller')
