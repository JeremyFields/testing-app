// TO DO: Update images, description?
const productsArray = [
    {
        id: "b58458a9-c86a-4085-9a56-88d91e609df5",
        title: "Mario",
        price: 5.00
    },
    {
        id: "10d5f6e3-1036-4c79-b523-d16a1d789145",
        title: "Zelda",
        price: 5.00
    },
    {
        id: "82a16873-7c09-4470-b802-9688fd0e937d",
        title: "Donkey Kong",
        price: 5.00
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