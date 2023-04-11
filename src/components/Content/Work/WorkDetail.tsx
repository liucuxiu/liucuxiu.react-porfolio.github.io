import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import image from './data/3.png'
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
          <img src={image} className="work-image" alt={props.work.category}/>
          <h6>{props.work.description}</h6>
      </Card>
    </Col>

  )
}
export default WorkDetail