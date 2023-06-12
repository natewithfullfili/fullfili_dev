import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      <div className="App">
        <h1>Welcome to Fullfili</h1>
      </div>
    </Authenticator>
  );
}

export default App;
