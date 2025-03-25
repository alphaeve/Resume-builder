import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Template5 = ({ profile, aboutMe, experience, education, skills }) => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row>
        <Col md={8} className="p-4">
          <h1 className="fw-bold" style={{ color: "#333" }}>{profile.name} <span style={{ color: "#007bff" }}>{profile.position}</span></h1>
          <h4 className="text-muted">{profile.tagline}</h4>
          <hr />
          <h5 className="fw-bold">PROFILE</h5>
          <p>{aboutMe}</p>
          <h5 className="fw-bold mt-4">WORK EXPERIENCE</h5>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h6 className="fw-bold">{exp.title} - {exp.company}</h6>
              <p className="text-muted">{exp.startMonth} {exp.startYear} - {exp.endMonth} {exp.endYear} | {exp.location}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
          <h5 className="fw-bold mt-4">EDUCATION</h5>
          {education.map((edu, index) => (
            <div key={index}>
              <h6 className="fw-bold">{edu.degree}</h6>
              <p className="text-muted">{edu.startYear} - {edu.endYear} | {edu.institute}</p>
              <p>{edu.achievement} | {edu.grade}</p>
            </div>
          ))}
        </Col>
        <Col md={4} className="p-4 text-white" style={{ backgroundColor: "#003366" }}>
          <h5 className="fw-bold">CONTACT</h5>
          <p><strong>Address:</strong> {profile.location}</p>
          <p><strong>Phone:</strong> {profile.contact}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <h5 className="fw-bold mt-4">SKILLS</h5>
          {Object.keys(skills).map((category, index) => (
            <div key={index}>
              <h6 className="fw-bold text-warning">{category}</h6>
              <ul>
                {skills[category].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Template5;
