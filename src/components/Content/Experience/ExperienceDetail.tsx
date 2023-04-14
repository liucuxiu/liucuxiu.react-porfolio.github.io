import React from 'react';
import Card from 'react-bootstrap/Card';

interface Experience {
  id: number;
  startTime: string;
  endTime: string;
  jobTitle: string;
  description: string;
}

const ExperienceDetail: React.FC<{ experience: Experience }> = (props: { experience: Experience }) => {
  return (
    <Card className="experience">
      <span className="exp-time">
        {props.experience.startTime} - {props.experience.endTime}
      </span>
      <span className="job-title">{props.experience.jobTitle}</span>
      <span>{props.experience.description}</span>
    </Card>
  );
};

export default ExperienceDetail;