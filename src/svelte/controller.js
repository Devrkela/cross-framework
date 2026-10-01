import { mount } from 'svelte';

import Toolbar from './components/Toolbar.svelte'

import buttons from "../common/buttons.js";

mount(Toolbar, {
  target: document.getElementById('controller'),
  props:{buttons}
});