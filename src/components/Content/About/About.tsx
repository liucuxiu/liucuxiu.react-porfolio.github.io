import './About.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './../../../assets/cv.jpeg'
import React from 'react';
import { Button } from 'react-bootstrap';

const About = () => {
  return (
    <div id="about" className="about content-detail">
      <h1>About</h1>
      <Container>
        <Row >
          <Col md={4}>
              <img className="circle-image"
                   src={logo}
                   alt="Circle"/>
                <Button className="button">Download CV</Button>
          </Col>
          <Col>
            <div className="talking-box">
              <div className="arrow"></div>
              <div className="content">
                <p>
                  As a software engineer with ERP, e-commerce, payments and fintech experience,
                  I'm passionate about delivering high-quality systems that give my clients the power to manage their businesses more effectively.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default About