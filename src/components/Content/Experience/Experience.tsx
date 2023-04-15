import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { experiences } from './data/experience';
import ExperienceDetail from './ExperienceDetail';
import './Experience.css'

const Experience = () => {
  const experienceList = experiences.map(exp =>
    <ExperienceDetail key={exp.id} experience={exp}/>
  )
  return (
    <div id="experience" className="content-detail">
      <h1>Experience</h1>
      <Container>
        <Row>
          <Col>
            {experienceList}
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Experience