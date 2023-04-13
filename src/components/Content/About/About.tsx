import './About.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './../../../assets/cv.jpeg'

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
              <p className="text">Your text here</p>
          </Col>
          <Col>
            <div className="talking-box">
              <div className="arrow"></div>
              <div className="content">
                <p>
                  Maecenas ultricies turpis quis mauris pretium, id lacinia libero
                  congue. Nam aliquet eget sem at dictum. Integer massa felis, faucibus
                  sed lorem quis, tincidunt pulvinar neque. Sed fringilla, diam in porta
                  convallis, elit enim rhoncus orci, fermentum condimentum lectus neque
                  vel nisl. Nunc ac dui vitae urna tincidunt mattis in id est. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat
                  volutpat.
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