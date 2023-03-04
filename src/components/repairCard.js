import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../cartContext';
import { useContext } from 'react';

function RepairCard(props) {
    // passing in the product through props.product (item that we're selling)
    const product = props.product;
    const cart = useContext(CartContext);
    const productQty = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card>
            <Card.Body>
                <Card.Img style={{ height: "25rem", width: "20rem" }} variant="top" src={product.image} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {productQty > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQty}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                                <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }

            </Card.Body>
        </Card>
    )
}


export default RepairCard;