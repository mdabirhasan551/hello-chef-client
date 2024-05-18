import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <Container className='text-white'>
                <Row>
                    <Col>Hello <span>Chef</span></Col>
                    <Col></Col>
                    <Col>col 2</Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Footer;