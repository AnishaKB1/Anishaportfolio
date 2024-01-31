import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';


const Main = (props) => {
  return (
    <div>
      <Navbar />
      {props.child}
      <Footer />
    </div>
  );
}

export default Main;
