import '../App.css';
import { Button, Form, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {

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
            alert("Thank you for the message. Someone wil get back to you soon.")
            event.preventDefault();

            emailjs.sendForm('service_fbugjr1', 'template_h187u1e', form1.current, 'L_9oEZflrSDUBHMuk')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            event.target.reset();
        };
    }

    return (
        <Form ref={form1} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder="Enter message"
                        name="message" />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Contact;