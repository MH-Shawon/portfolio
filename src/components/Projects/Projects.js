import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import wareHouse from "../../Assets/Projects/Ware-House.png";
import event from "../../Assets/Projects/Event-Management.png";
import brandShop from "../../Assets/Projects/brandShop.png";
import factory from "../../Assets/Projects/Power-Tools.png";
import job from "../../Assets/Projects/Job-Seeking-Story.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={factory}
              isBlog={false}
              title="Power Tools Management"
              description="Welcome to our power tools haven! Enjoy a seamless shopping experience with an intuitive interface, detailed product listings, and advanced search options. Shop confidently with secure transactions, personalized accounts, and responsive customer support. Discover exclusive promotions, educational content, and hassle-free returns."
              ghClient="https://github.com/MH-Shawon/power-tools-client"
              ghServer="https://github.com/MH-Shawon/power-tools-server"
              demoLink="https://power-tools-9e58f.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brandShop}
              isBlog={false}
              title="Brand-Shop"
              description="Engineered a brand shop website using React, Tailwind CSS, MongoDB, and Express for an improved online experience. Elevated brand shop growth with innovative features, enhancing user satisfaction and visibility."
              ghClient="https://github.com/MH-Shawon/brand-shop-client"
              ghServer="https://github.com/MH-Shawon/brand-shop-server"
              demoLink="https://brand-shop-assignment-bba19.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wareHouse}
              isBlog={false}
              title="Warehouse Management"
              description="Optimize warehouse operations with our web-based management system featuring real-time inventory tracking, intuitive order processing, and automated task scheduling. Enhance efficiency with a user-friendly interface, data analytics for informed decision-making, and seamless integration with existing systems. Ensure accuracy and speed in logistics with our comprehensive warehouse solution."
              ghClient="https://github.com/MH-Shawon/warehouse-client"
              ghServer="https://github.com/MH-Shawon/warehouse-server"
              demoLink="https://warehouse-client-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job-Seeking"
              description=""
              ghClient="https://github.com/MH-Shawon/job-seeking-client"
              ghServer="https://github.com/MH-Shawon/job-seeking-server"
              demoLink="https://job-seeking-cb1ed.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event-Management"
              description="Implemented an event-management website using React.js to deliver a dynamic and interactive user interface, enhancing user experience for event planning and execution. Utilized Tailwind CSS for efficient and responsive styling, ensuring a visually appealing and modern design."
              ghLink="https://github.com/MH-Shawon/event-management"
              demoLink="https://event-manegement-b6535.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
