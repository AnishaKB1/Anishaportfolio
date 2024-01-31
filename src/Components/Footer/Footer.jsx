import React from 'react';
import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <div>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-left">
            <h3>Designed by Anisha K B</h3>
          </Col>
          <Col md="4" className="footer-center">
            <h3>Copyright © {year} AKB</h3>
          </Col>
          <Col md="4" className="footer-right">
            <ul className="footer-icons" >
              <li className="social-icons" >
                <a
                  href="https://github.com"
                  style={{ color: "rgb(66, 66, 66)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/anisha.kb.1"
                  style={{ color: "rgb(66, 66, 66)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineFacebook/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anisha-k-b-061503144"
                  style={{ color: "rgb(66, 66, 66)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anishavinilal/"
                  style={{ color: "rgb(66, 66, 66)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
