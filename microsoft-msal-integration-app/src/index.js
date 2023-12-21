import React from 'react';
import ReactDOM from 'react-dom/client';
import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

import { msalInstance } from './helper/msalConfig';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MsalProvider instance={msalInstance}>
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <App />
    </MsalAuthenticationTemplate>
  </MsalProvider>
);

