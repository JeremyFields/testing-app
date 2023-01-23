import { createContext, useState } from "react";
import ProductCard from "./components/productCard";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    // cartProducts array: 
    // [ { id: 1, quantity: 2 } ]

    // retrieve quantity of product
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        // if quantity is undefined
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    // increase quantity of product by 1
    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        // if product is not in cart, add 1 to quantity
        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
            // if product is in cart
        }
        else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        // if id's match
                        product.id === id
                            // overwrite quantity of products (by adding 1 if true and in cart)
                            ? { ...product, quantity: product.quantity + 1 }
                            // if false, leave as-is
                            : product

                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        }
        else {
            setCartProducts(
                setCartProducts(
                    cartProducts.map(
                        product =>
                            // if id's match
                            product.id === id
                                // overwrite quantity of products (by subtracting 1 if true and in cart)
                                ? { ...product, quantity: product.quantity - 1 }
                                // if false, leave as-is
                                : product

                    )
                )
            )
        }
    }

    // delete product from cart entirely
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                // if product object id != id, add to new array
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )
    }

    // get total cost of cart
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            // total cost is price multiplied by quantity
            totalCost += (productData.price * cartItem.quantity);
        });

        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;