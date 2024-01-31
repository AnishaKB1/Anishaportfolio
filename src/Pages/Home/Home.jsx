import React from 'react';

import intern from '../images/intern.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdWavingHand } from "react-icons/md";
import './Home.css';



const Home = () => {
  return (
    <div>
        <div className="home-container">
        <div className="content-container">
          <div className="text-container">
            <h2 id="hi">Hi There! <MdWavingHand /></h2>
            <h1 id="name">I'm Anisha K B </h1>
            <p id="para">MERN Stack Developer</p>
            
          </div>
          
          <div className="image-container">
            <img src={intern} alt="Internship" className="intern-image" />
          </div>
        </div>
        
      </div>

      






      <div className="intro-container">
        <h1 id='introhead' style={{ color: 'rgb(112, 112, 112)'  }}>Let Me <span style={{ color: 'black' }}>Introduce</span><span style={{ color: 'rgb(112, 112, 112)'  }}>   Myself</span></h1>
        <p className="intropara">
          Hello there! I'm a vibrant <strong sx={{ color: 'purple' }}>MERN Stack Developer</strong> with a passion for crafting captivating web experiences. My toolbox is equipped with the power trio of HTML, CSS, and JavaScript, sprinkled with the magic of Bootstrap for sleek designs. When it comes to the backend, I ride the Express.js and Node.js wave, seamlessly integrating with the dynamic MongoDB.
        </p>
        <p className="intropara1">
          Armed with a robust foundation in each element of the MERN stack, I bring not just skills, but a fresh perspective and an insatiable curiosity to the coding universe. My commitment to continuous learning, combined with hands-on experience and a flair for creative problem-solving, makes me your go-to person for developing innovative and rock-solid web applications.
        </p>
        <p className="intropara2">
          Eager to dive into collaborative projects, I'm thrilled about the exciting opportunities that await on my journey as a MERN Stack Developer. Let's code something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default Home;
