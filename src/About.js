import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const About = () => {
    return (
        <div>
            <section className="page-section" id="about">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    {/* <h3 className="section-subheading text-muted mb-3">Ha Nguyen</h3> */}
                </div>
                <Row className="text-center">
                    <Col>
                        <img className="picture-of-me" src="https://media-exp1.licdn.com/dms/image/C4E03AQHmrpvckS15iw/profile-displayphoto-shrink_400_400/0/1587604769212?e=1632355200&v=beta&t=zpNXVwEktOTGAQIJjPHJV8z869ITYAVv0HChbpM2xtE" alt=""/>
                    </Col>
                </Row>
                <Row>
                    <Col md={1} lg={2}>
                    </Col>
                    <Col sm={12} md={10} lg={8}> 
                        <h4 className="my-3">Ha from Hanoi</h4>
                        <p className="text-muted">A marketing professional, experienced in project management, trained in software development, excellent team player with exceptional multi-cultural interpersonal skills and the ability to adapt to rapidly changing situations</p>
                    </Col>
                    <Col md={1} lg={2}>
                    </Col>
                </Row>

            </Container>
        </section>
        </div>
    )
}

export default About;