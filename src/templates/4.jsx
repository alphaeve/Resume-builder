import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Template4 = ({ profile, aboutMe, experience, education, skills }) => {
  return (
    <Container className="p-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="text-center mb-4 bg-black text-white py-3">
        <Col>
          <h1 className="fw-bold">{profile.name}</h1>
          <h4>{profile.tagline}</h4>
          <p>{profile.location}</p>
        </Col>
      </Row>
      
      <Row>
        <Col md={4} style={{ backgroundColor: "#e9ecef", padding: "20px" }}>
          <h3 className="text-dark">Skills</h3>
          <ListGroup>
            {skills.map((skill, index) => (
              <ListGroup.Item key={index} className="border-0 bg-transparent">
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={8}>
          <h3 className="text-dark">Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="fw-bold text-primary">{exp.title} at {exp.company}</h4>
              <p className="text-muted">{exp.startMonth} {exp.startYear} - {exp.location}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-dark">Education</h3>
          {education.map((edu, index) => (  
            <div key={index}>
              <h4 className="fw-bold text-primary">{edu.degree} in {edu.fieldOfStudy}</h4>
              <p className="text-muted">{edu.institute}</p>
              <p className="text-muted">{edu.startYear} - {edu.endYear} | GPA: {edu.grade}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Template4;
