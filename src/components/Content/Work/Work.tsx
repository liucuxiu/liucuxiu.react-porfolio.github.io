import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WorkDetail from './WorkDetail';
import { works } from './data/work';


const Work = () => {
  const workList = works.map(work =>
    <WorkDetail key={work.id} work={work}/>
  )
  return (
    <div id="work" className="content-detail">
      <h1>Work</h1>
      <Container>
        <Row>
          {workList}
        </Row>
      </Container>
    </div>
  )
}

export default Work