import React from 'react'
import PortfolioItem from './PortfolioItem';
import {Container, Col} from 'react-bootstrap'

const Portfolio = () => {
    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase mb-3">Portfolio</h2>
                    <h3 className="section-subheading text-muted mb-5">Check out some of my projects that I've done.</h3>
                </div>
                <Col sm={12}>
                    <PortfolioItem />
                </Col>
            </Container>
        </section>
        </div>
    )
}

export default Portfolio