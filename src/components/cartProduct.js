import Button from 'react-bootstrap/Button';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import { getProductData } from '../productsStore';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>Qty: {quantity}</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>

        </>
    )
}


export default CartProduct;