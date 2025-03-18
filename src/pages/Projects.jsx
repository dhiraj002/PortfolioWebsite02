import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import adminEmp from "../assets/projects/adminEmployee.png";
import portfolio from "../assets/projects/portfolio.png";
import bookShow from "../assets/projects/bookshow.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Recent Top <strong className="yellow">Works </strong>
                </h1>
                <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={portfolio}
                            isBlog={false}
                            title="Portfoxplore my professional journey through this interactive and visually engaging portfolio built with React. Designed to showcase my skills, projects, and experiences, this site reflects my passion for creating seamless and dynamic user experiences.
                            With a clean and modern interface, this portfolio highlights my technical expertise in React, including component-based architecture, state management, and dynamic routing. Each section is carefully crafted to offer a user-friendly experience, from an overview of my skills to detailed case studies of my projects"
                            // ghLink="https://github.com/19sajib/lift-buddy"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={adminEmp}
                            isBlog={false}
                            title=" Employee Management System"
                            description="This Employee Management System, developed using React, is designed to simplify task management and employee tracking. The system leverages localStorage for secure and persistent login, so users can easily access their sessions without the need for a database.Users can seamlessly add and assign tasks to employees, ensuring effective tracking of responsibilities. The interface is intuitive, offering an organized view of employees and their respective tasks, making it easier for managers to monitor progress and productivity.With a focus on simplicity and functionality, this system is an ideal tool for small teams looking to improve workflow and task delegation"
                            ghLink="https://github.com/dhiraj002/Employee_Management_Systema"
                            demoLink="https://employee-management-system002.netlify.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bookShow}
                            isBlog={false}
                            title="Book Show"
                            description="The BookShow app, built with React, offers an interactive and user-friendly experience for discovering books. By integrating the Google Books API, it pulls in real-time data, providing users with a comprehensive selection of books from various genres and categories. With a clean and intuitive interface, users can easily search for books, view detailed information, and explore recommendations.The app includes a dynamic pagination feature, ensuring smooth navigation through large sets of book results. This makes it easy for users to browse and find books that match their interests, without feeling overwhelmed by too much information at once. Whether you're looking for popular titles, authors, or exploring new genres, the BookShow app delivers a polished and efficient browsing experience."
                            ghLink="https://github.com/dhiraj002/BooksShow"
                        />
                    </Col>

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pg}
                            isBlog={false}
                            title="BooksShow"
                            description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
                            ghLink="https://github.com/dhiraj002/BooksShow"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            // imgPath={krypto}
                            isBlog={false}
                            title="Project Krypto"
                            description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
                            ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
                            demoLink="https://project-krypto.netlify.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={kickstart}
                            isBlog={false}
                            title="Solidity Kickstart"
                            description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
                            ghLink="https://github.com/19sajib/Solidity-Kickstart"
                        />
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
};

export default Projects;
