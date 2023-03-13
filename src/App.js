import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Store from './pages/Store';
import Repairs from './pages/Repairs';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { Route, Routes } from "react-router-dom";
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import CartProvider from './cartContext';


Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
        <div class="signout-button">
          <br></br>
          <Button onClick={signOut}>Sign out</Button>
        </div>
      </div>
    </CartProvider>
  )
};


export default App;
