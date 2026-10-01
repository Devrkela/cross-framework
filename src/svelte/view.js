import { mount } from 'svelte';

import Text    from './components/Text.svelte'

mount(Text, {
  target: document.getElementById('view'),
});