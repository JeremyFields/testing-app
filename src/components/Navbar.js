import React, { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal, Nav, Form } from 'react-bootstrap';
import { CartContext } from '../cartContext';
import CartProduct from './cartProduct';
import { DataStore } from '@aws-amplify/datastore';
import { Order, Game, GameOrder } from '../models';
import { getProductData } from "../productsStore";


const NavbarComponent = () => {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        // loop through games in cart
        for (let item of cart.items) {
            // save the ID of each game
            alert("Game ID: " + item.id)
            // query the Game DB
            const games = await DataStore.query(Game);
            alert(JSON.stringify(games))

            // inner loop - loop through games in Game DB
            for (let game of games) {
                // if game in cart === game in DB
                if (item.id === game.id) {
                    alert("GAME ID IN CART MATCHES GAME ID IN DB...")
                    alert("Cart ID: " + item.id + ", DB ID: " + game.id)

                    // save new order with those games
                    const order = await DataStore.save(
                        new Order({
                            "customerName": "NewCustomer",
                            "customerAddress": "Lorem ipsum dolor sit amet",
                            "games": game.id
                        })
                    );

                    alert("Order ID: " + order.id) // works
                    try {
                        const gameOrder = await DataStore.save(
                            // add customer name and customer address attribute
                            // or create customer table and link
                            new GameOrder({
                                gameId: game.id,
                                orderId: order.id
                            })
                        )
                    } catch (error) {
                        alert("Failed to create game order.")
                    };
                }
            }
        }



        // for (let item in cart.items) {
        //     // alert(x + ":" + JSON.stringify(cart.items[item]["id"]));
        //     alert(item + ":" + JSON.parse(JSON.stringify(cart.items[item])));
        // }
        // const fetchGames = async () => {
        //     try {
        //         const games = await DataStore.query(Game);
        //         alert(games)
        //     } catch (error) {
        //         alert("Unsuccessful")
        //     }

        // await DataStore.save(
        //     new Game({
        //         customerAddress: "My first order",
        //         customerName: "TESTING"
        //     })
        // );

        // await DataStore.save(
        //     new GameOrder({
        //         customerAddress: "My first order",
        //         customerName: "TESTING"
        //     })
        // );




        //         alert("Success")
        //     } catch (error) {
        //         alert("Unsuccessful")
        //     }
        // }

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
                            <Form.Group className="mb-3" controlId="checkoutFormName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Customer name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="success" onClick={checkout}>
                                Complete purchase!
                            </Button>
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