import React, { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal, Nav } from 'react-bootstrap';
import { CartContext } from '../cartContext';
import CartProduct from './cartProduct';


const NavbarComponent = () => {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

                            <Button variant="success">
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