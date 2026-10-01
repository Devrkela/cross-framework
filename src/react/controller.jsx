import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Toolbar from './components/Toolbar.jsx';

import buttons from "../common/buttons.js";

createRoot(document.getElementById('controller')).render(
  <StrictMode>
    <Toolbar buttons={buttons}/>
  </StrictMode>,
);