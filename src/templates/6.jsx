import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Template6 = ({ 
  profile = {}, 
  education = {}, 
  experience = {}, 
  skills = {}, 
  evaluation = [] 
}) => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Profile Section */}
      <Row className="bg-dark text-white p-4">
        <Col md={8}>
          <h1 className="fw-bold">{profile?.name || "Name Not Provided"}</h1>
          <h5>{profile?.position || "Job Title Not Provided"}</h5>
        </Col>
        <Col md={4} className="text-end">
          <p>📞 {profile?.contact || "N/A"}</p>
          <p>📧 {profile?.email || "N/A"}</p>
          <p>📍 {profile?.location || "N/A"}</p>
        </Col>
      </Row>

      {/* Education Section */}
      <Row className="mt-4">
        <Col md={12} className="bg-warning p-3 text-dark fw-bold">EDUCATION</Col>
        <Col md={12} className="p-3">
          <h5 className="fw-bold">{education?.university || "University Not Provided"}</h5>
          <p>{education?.duration || "Duration Not Provided"} | {education?.degree || "Degree Not Provided"}</p>
          <ul>
            {(education?.courses || []).map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <p><strong>Honors and Awards:</strong></p>
          <ul>
            {(education?.awards || []).map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="mt-4">
        <Col md={12} className="bg-warning p-3 text-dark fw-bold">EXPERIENCE</Col>
        <Col md={12} className="p-3">
          <h5 className="fw-bold">{experience?.company || "Company Not Provided"}</h5>
          <p>{experience?.duration || "Duration Not Provided"} | {experience?.title || "Title Not Provided"}</p>
          <ul>
            {(experience?.responsibilities || []).map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mt-4">
        <Col md={12} className="bg-warning p-3 text-dark fw-bold">SKILLS</Col>
        <Col md={12} className="p-3">
          <p><strong>Professional Skills:</strong> {(skills?.professional || []).join(", ") || "Not Provided"}</p>
          <p><strong>Computer Skills:</strong> {(skills?.computer || []).join(", ") || "Not Provided"}</p>
          <p><strong>Language:</strong> {skills?.language || "Not Provided"}</p>
          <p><strong>Leadership:</strong> {skills?.leadership || "Not Provided"}</p>
        </Col>
      </Row>

      {/* Evaluation Section */}
      <Row className="mt-4">
        <Col md={12} className="bg-warning p-3 text-dark fw-bold">EVALUATION</Col>
        <Col md={12} className="p-3">
          <ul>
            {(evaluation || []).map((evalPoint, index) => (
              <li key={index}>{evalPoint}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Template6;
