import React from 'react';
import { Col, Row, Card, Button  } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiGithubAlt 
} from "react-icons/di";
import {
  SiBootstrap,
  SiExpress
  
} from "react-icons/si";
import './Skill.css';
import ecom from '../images/ecom.jpg';
import todo from '../images/todo.jpg';
import ictak from '../images/ictak.jpg';
import blog from '../images/blog.jpg';
import { CgWebsite } from "react-icons/cg";




const Skill = () => {
  return (
    <div>
     <h3 id='skill' style={{ color: 'rgb(112, 112, 112)'}}>Professional <span style={{ color: 'black' }}>Skillset</span></h3>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }}     >
          <DiCss3 />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <DiJavascript1 />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <DiHtml5 />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <SiBootstrap />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <DiNodejs />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <DiReact />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <DiMongodb />
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <SiExpress /> 
        </Col>
        <Col xs={6} md={2} className="tech-icons" style={{ height: "40px", width: "160px" }} >
          <DiGithubAlt /> 
        </Col>
      </Row>

        {/* My Recent Works Section */}
        <h3 id='Works' style={{ color: 'rgb(112, 112, 112)', marginTop: '10px' }}>
        My Recent <span style={{ color: 'black' }}>Works</span>
      </h3>

      <Row className='recent-works-row'>

         {/* Card 1 */}
         <Col xs={12} md={4}>
          <Card className='work-card'>
            <Card.Img variant='top' src={blog} />
            <Card.Body>
              <Card.Title>Blog App
</Card.Title>
              <Card.Text className='work-description'>
              Experienced MERN stack developer skilled in creating user-friendly blog apps. Proficient in optimizing MongoDB storage, implementing Express.js server logic, crafting responsive UIs with React.js, and managing backend operations using Node.js. 
              Passionate about enhancing blogging experiences through MERN technologies.
              </Card.Text>
              <div className='work-buttons'>
                <Button className='git' href='https://github.com/AnishaKB1/Blognewapp.git' target='_blank'>
                  <DiGithubAlt /> GitHub
                </Button>
                <Button className='demo' href='https://blogappbackend-production.up.railway.app/' target='_blank'>
                <CgWebsite className='demoicon'/>
                    Demo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>


        {/* Card 2*/}
        <Col xs={12} md={4}>
          <Card className='work-card'>
            <Card.Img variant='top' src={ecom} />
            <Card.Body>
              <Card.Title>E-commerce Website
</Card.Title>
              <Card.Text className='work-description'>
              Crafted a dynamic e-commerce site in React JS, showcasing
expertise in responsive UI design. Integrated APIs seamlessly for
efficient data management, enhancing the overall shopping
experience.
              </Card.Text>
              <div className='work-buttons'>
                <Button className='git' href='https://github.com/AnishaKB1/Ecommerce.git' target='_blank'>
                  <DiGithubAlt /> GitHub
                </Button>
                <Button className='demo' href='https://anishakb1.github.io/Ecommerce/' target='_blank'>
                <CgWebsite className='demoicon'/>
                    Demo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} md={4}>
          <Card className='work-card'>
            <Card.Img variant='top' src={todo} />
            <Card.Body>
              <Card.Title>To do App
</Card.Title>
              <Card.Text className='work-description'>
              A MERN-based Todo app is a web application that utilizes
MongoDB, Express.js, React.js, and Node.js to enable users to
efficiently manage and organize their tasks and to-do lists in realtime.

              </Card.Text>
              <div className='work-buttons'>
                <Button className='git' href='https://github.com/AnishaKB1/Todoappexam.git' target='_blank'>
                  <DiGithubAlt /> GitHub
                </Button>
                <Button className='demo' href='https://neon-sunflower-e3783a.netlify.app/' target='_blank'>
                <CgWebsite className='demoicon'/>
                    Demo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
       
         {/* Card 4 */}
        <Col xs={12} md={4}>
          <Card className='work-card'>
            <Card.Img variant='top' src={ictak} />
            <Card.Body>
              <Card.Title>ICTAK Internship Portal :-Admin and Mentor view
</Card.Title>
              <Card.Text className='work-description'>
              This ICTAK Internship project, featuring distinct modules for
Admin and Mentor functionalities, stands as a testament to my
proficiency in utilizing the MERN Stack—MongoDB, Express, React
JS, and Node JS.


              </Card.Text>
              <div className='work-buttons'>
                <Button className='git' href='https://github.com/AnishaKB1/ICTAK-Portal.git' target='_blank'>
                  <DiGithubAlt /> GitHub
                </Button>
                <Button className='demo' href='https://pink-brave-penguin.cyclic.app/' target='_blank'>
                <CgWebsite className='demoicon'/>
                    Demo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </div>
  );
}

export default Skill;
