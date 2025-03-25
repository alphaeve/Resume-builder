import { Container, Row, Col } from 'react-bootstrap';
import { HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';

const Template3 = ({ profile, aboutMe, experience, education, skills }) => {
    

 

  return (
    <Container className="bg-light p-4">
      <Row className="bg-primary text-white p-3 mb-4 rounded">
        <Col>
          <h1 className="mb-2">{profile.name}</h1>
          <p className="mb-1">{profile.tagline}</p>
          {profile.position && (
            <p className="mb-1 d-flex align-items-center">
              <HiOfficeBuilding className="me-2" /> {profile.position}
            </p>
          )}
          {profile.location && (
            <p className="mb-1 d-flex align-items-center">
              <HiLocationMarker className="me-2" /> {profile.location}
            </p>
          )}
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          {/* About Me Section */}
          <section className="mb-4">
            <h2 className="border-bottom pb-2 mb-3">About Me</h2>
            <p>{aboutMe}</p>
          </section>

          {/* Skills Section */}
          <section className="mb-4">
            <h2 className="border-bottom pb-2 mb-3">Relevant Skills</h2>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="badge bg-primary">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-4">
            <h2 className="border-bottom pb-2 mb-3">Work Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between">
                  <h3>{job.title} | {job.company}</h3>
                  <p className="text-muted">
                    {job.startMonth} {job.startYear} - {job.isWorking ? "Present" : `${job.endMonth} ${job.endYear}`}
                  </p>
                </div>
                <p>{job.location}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="mb-4">
            <h2 className="border-bottom pb-2 mb-3">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between">
                  <h3>{edu.institute}</h3>
                  <p className="text-muted">
                    {edu.startYear || ""} - {edu.endYear}
                  </p>
                </div>
                <p>{edu.degree} • {edu.fieldOfStudy}</p>
                <p>Grade: {edu.grade}</p>
              </div>
            ))}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Template3;