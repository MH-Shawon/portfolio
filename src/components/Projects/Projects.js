import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import house from "../../Assets/Projects/house.svg";
import news from "../../Assets/Projects/news.svg";
import makeup from "../../Assets/Projects/makeup.svg";
import factory from "../../Assets/Projects/factory.svg";
import event from "../../Assets/Projects/event.svg";

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
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://powr-tools-manufacture-client.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeup}
              isBlog={false}
              title="Brand-Shop"
              description="Engineered a brand shop website using React, Tailwind CSS, MongoDB, and Express for an improved online experience. Elevated brand shop growth with innovative features, enhancing user satisfaction and visibility."
              ghLink="https://github.com/MH-Shawon/brand-shop-client"
              demoLink="https://brand-shop-assignment-bba19.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Warehouse Management"
              description="Optimize warehouse operations with our web-based management system featuring real-time inventory tracking, intuitive order processing, and automated task scheduling. Enhance efficiency with a user-friendly interface, data analytics for informed decision-making, and seamless integration with existing systems. Ensure accuracy and speed in logistics with our comprehensive warehouse solution."
              ghLink="https://github.com/MH-Shawon/warehouse-client"
              demoLink="https://warehouse-client-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event-Management"
              description="Implemented an event-management website using React.js to deliver a dynamic and interactive userinterface, enhancing user experience for event planning and execution. Utilized Tailwind CSS for efficient andresponsive styling, ensuring a visually appealing and modern design."
              ghLink="https://github.com/MH-Shawon/event-management"
              demoLink="https://event-manegement-b6535.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Dragon-News"
              description="Designed and developed a news portal website featuring a responsive and user-friendly interface usingReact.js for dynamic content rendering. Incorporated Tailwind CSS for streamlined styling, ensuring anengaging and visually appealing presentation of news articles across various device"
              ghLink="https://github.com/MH-Shawon/dragon-news"
              demoLink="https://dragon-news-3d21b.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
