import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Layout from './Components/Shared/Layout';
import Dashboard from './Components/Shared/Dashboard';
import Products from './Components/Products'


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>} />
            <Route index path='/dashboard' element={<Dashboard/>} />
            <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
