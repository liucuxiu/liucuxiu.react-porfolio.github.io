import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './Work.css'

interface Work {
  id: number
  description: string
  thumbnail: string
  category: string
}

const WorkDetail: React.FC< { work: Work }> = (props: { work: Work}) => {
  return (
    <Col md={4}>
      <Card className="work-detail">
          <img src={props.work.thumbnail} className="work-image" alt={props.work.category}/>

        <span className="category">{props.work.description}</span>
      </Card>
    </Col>

  )
}
export default WorkDetail