import { useMsal } from '@azure/msal-react';

export function App() {
  const { instance, accounts, inProgress } = useMsal();

  if (accounts.length > 0) {
      return <span>Welcome {accounts[0]['name']}</span>
  } else if (inProgress === "login") {
      return <span>Login is currently in progress!</span>
  } else {
      return (
          <>
              <span>There are currently no users signed in!</span>
              <button onClick={() => instance.loginPopup()}>Login</button>
          </>
      );
  }
}

export default App;
