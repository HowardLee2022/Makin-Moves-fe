import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from 'react-bootstrap';
import CreateUser from "../components/RegisterForm";

function Register(props) {
    return (
        <>
        <Carousel/>
        <Container className="my-5">
             <Row>
                <Col xs={{span:12, order:2}} md={{span: 6, order:1}} data-aos="fade-zoom-in">
                    <CreateUser {...props}/>
                </Col>
                <Col xs={{span:12, order:1}} md={{span: 6, order:2}} data-aos="fade-zoom-in">
                    <h1 style={{textAlign:"center" , paddingTop: "100px", paddingBottom: "100px"}}>Sign Up to start Makin Moves!</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Register;