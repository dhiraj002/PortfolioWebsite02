import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import { SiMaterialui, SiGraphql, SiSolidity, SiRedux, SiMongodb, SiHtml5 } from "react-icons/si";

import { FaShopify } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";

const Techstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJqueryLogo />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMaterialui />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaShopify />
            </Col>
        </Row>
    );
};

export default Techstack;
