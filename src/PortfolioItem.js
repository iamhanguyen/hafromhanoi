import React, {useState} from 'react'
import {Container, Col, Row, Modal, Button} from 'react-bootstrap'
import data from './data'
import {ImCross} from 'react-icons/im'

const PortfolioItems = ({project}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col sm={6} lg={4} className="mb-4">
                {/* <!-- Portfolio item--> */}
                <div className="portfolio-item" id={project.link}>
                    <a href={project.link} className="portfolio-link" onClick={handleShow}>
                <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid"  src={project.image} alt={project.title} />
                </a>
                <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{project.title}</div>
                {/* <div className="portfolio-caption-subheading text-muted">{project.description}</div> */}
                </div>
                </div>
            </Col>
            
      <Modal class="portfolio-item" size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton={false}>
        <Modal.Title className="text-center">
              <span className="modal-heading-area">
                  {project.title} <br/>
              </span>
          {/* <span className="modal-subheading-area">Lorem ipsum dolor sit amet consectetur</span> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col sm={0} md={2} lg={3}></Col>
                    <Col sm={12} md={8} lg={6}>
                    <img className="portfolio-image img-fluid" src={project.image} alt={project.title} />
                    </Col>
                    <Col sm={0} md={2} lg={3}></Col>
                </Row>
                <Row>
                    <Col xs={1} lg={2}></Col>
                    <Col xs={12} lg={8} className="text-center mt-2">
                        {project.description}
                    </Col>
                    <Col xs={1} lg={2}></Col>
                </Row>
                <Row>
                    <Col xs={1} lg={2}></Col>
                    <Col xs={12} lg={8} className="text-center mt-2">
                        <div className="demo-github">
                             <a target="_blank" rel="noreferrer" href={project.demo}>Demo</a>
                             <a target="_blank" rel="noreferrer"href={project.github}>GitHub</a>
                        </div>    
                    </Col>
                    <Col xs={1} lg={2}></Col>
                </Row>
                
                <br/>
                <Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    <Button variant="primary" onClick={handleClose} className="modal-btn">
                        <span className="modal-close-button">
                        <ImCross className="mb-1 me-2"/> Close
                        </span>
                    </Button>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
      </Modal>
        </>
    )
}

const PortfolioItem = () => {
    const [portfolioData] = useState(data);
    return (
        <div>
            <Row>
                {
                portfolioData.map((project, i)=> {
                    return <PortfolioItems  project={project} key={i}/>;
                })
                }
            </Row>
        </div>
    )
}

export default PortfolioItem;