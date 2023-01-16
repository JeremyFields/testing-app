import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Store from './pages/Store';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (

    <Authenticator>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {({ signOut, user }) => (

        <div className="container">
          <header className="App-header">


          </header>
          <main>
            <Home someText={signOut} />

          </main>
        </div>

      )}

    </Authenticator>







  )
};

export default App;
