import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Text    from './components/Text.jsx';

createRoot(document.getElementById('view')).render(
  <StrictMode>
    <Text />
  </StrictMode>,
);