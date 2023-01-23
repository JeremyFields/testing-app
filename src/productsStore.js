const productsArray = [
    {
        id: "1",
        title: "Mario",
        price: 4.99
    },
    {
        id: "2",
        title: "Zelda",
        price: 4.99
    },
    {
        id: "3",
        title: "Donkey Kong",
        price: 4.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };