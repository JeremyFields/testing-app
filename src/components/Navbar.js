import React, { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal, Nav, Form } from 'react-bootstrap';
import { CartContext } from '../cartContext';
import CartProduct from './cartProduct';
import { DataStore } from '@aws-amplify/datastore';
import { Order, Game, GameOrder } from '../models';

const NavbarComponent = () => {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [values, setValues] = useState({});

    const onFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
        console.log(name, value);
    };

    const checkout = async (event) => {
        event.preventDefault();
        event.persist();
        // alert(JSON.stringify(values))
        const name = JSON.stringify(values["full_name"]);
        const email_add = JSON.stringify(values["email"]);
        const ship_add = JSON.stringify(values["ship_address"]);

        // loop through games in cart
        for (let item of cart.items) {
            // save the ID of each game
            // alert("Game ID: " + item.id)
            // query the Game DB
            const games = await DataStore.query(Game);
            // alert(JSON.stringify(games))

            // inner loop - loop through games in Game DB
            for (let game of games) {
                // if game in cart === game in DB
                if (item.id === game.id) {
                    // alert("GAME ID IN CART MATCHES GAME ID IN DB...")
                    // alert("Cart ID: " + item.id + ", DB ID: " + game.id)

                    // save new order with those games
                    const order = await DataStore.save(
                        new Order({
                            "customerName": name,
                            "customerAddress": ship_add,
                            "games": game.id
                        })
                    );

                    // alert("Order ID: " + order.id) // works
                    try {
                        const gameOrder = await DataStore.save(
                            // add customer name and customer address attribute
                            new GameOrder({
                                gameId: game.id,
                                orderId: order.id
                            })
                        )
                    } catch (error) {
                        alert("Failed to create game order");
                    };
                }
            }
        }
    }


    const productsCnt = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">8-Bit Gaming</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/store">Store</Nav.Link>
                            <Nav.Link href="/repairs">Repairs</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button onClick={handleShow}>Cart ({productsCnt} Items)</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCnt > 0 ?
                        <>
                            <p>Items in cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Form onSubmit={checkout}>
                                <Form.Group className="mb-3" controlId="checkoutFormName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="full_name" onChange={onFormChange} type="text" placeholder="Customer name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" onChange={onFormChange} type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Shipping address</Form.Label>
                                    <Form.Control name="ship_address" onChange={onFormChange} type="text" placeholder="Enter address" />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Complete purchase!
                                </Button>
                            </Form>
                        </>
                        :
                        <h1>Cart is empty!</h1>

                    }
                </Modal.Body>

            </Modal>
        </>
    )
}

export default NavbarComponent;