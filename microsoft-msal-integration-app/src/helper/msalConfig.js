import { PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
      clientId: String(process.env.REACT_APP_MSAL_CLIENT_ID),
      authority: `https://login.microsoftonline.com/${process.env.REACT_APP_MSAL_AUTHORITY}`,
      redirectUri: process.env.REACT_APP_MSAL_REDIRECT_URI
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false
    }
  }
  
export const msalInstance = new PublicClientApplication(msalConfig);