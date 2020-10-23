import React from 'react';
import Navbar from '../NavBar/Navbar';
import Payable from '../Payable/Payable';

const Home = () => {
 return (
  <div>
  <Navbar/>
  <Payable/>
   <button className="btn btn-dark">Home page</button>

  </div>
 );
};

export default Home;