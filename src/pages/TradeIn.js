import '../App.css';
import { Button, Form, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';




const TradeIn = () => {

    const [validated, setValidated] = useState(false);
    const form1 = useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (form.checkValidity() === true) {
            alert("Thank you for the trade-in request. Please check your email.")
            event.preventDefault();

            emailjs.sendForm('service_fbugjr1', 'template_z1n8frl', form1.current, 'L_9oEZflrSDUBHMuk')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            event.target.reset();
        };
    }

    return (
        <>
            <h1 class="title">Trade-in Request</h1>
            <div class="contact-form">
                <Form ref={form1} noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Col sm={30}>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter name"
                                name="user_name"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Col sm={12}>
                            <Form.Control
                                required type="email"
                                placeholder="Enter email"
                                name="user_email" />
                        </Col>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message:</Form.Label>
                        <Col sm={30}>
                            <Form.Select
                                required
                                as="textarea"
                                rows={3}
                                placeholder="Enter message"
                                name="message">
                                    <option>Video Game</option>
                                    <option>Game System</option>
                                </Form.Select>
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default TradeIn;