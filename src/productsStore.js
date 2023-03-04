// TO DO: Update images, description?
import Mario from "./images/supermario64.jpg";
import Zelda from "./images/zelda64.jpg";
import DonkeyKong from "./images/donkeykong.jpg";
import Earthbound from "./images/earthbound.jpg";
import SeventyTwoPin from "./images/72pinconnector.jpg";

const productsArray = [
    {
        id: "b58458a9-c86a-4085-9a56-88d91e609df5",
        title: "Mario",
        price: 5.00,
        image: Mario
    },
    {
        id: "10d5f6e3-1036-4c79-b523-d16a1d789145",
        title: "Zelda",
        price: 5.00,
        image: Zelda
    },
    {
        id: "82a16873-7c09-4470-b802-9688fd0e937d",
        title: "Donkey Kong",
        price: 5.00,
        image: DonkeyKong
    },
    {
        id: "efb4fb02-06ec-4ba4-a782-c548b01fb016",
        title: "Earthbound",
        price: 5.00,
        image: Earthbound
    }
]

// repair array
const repairArray = [
    {
        id: "413c38a9-c125-470c-8d6f-41baa773962e",
        title: "72-Pin Repair",
        price: 10.00,
        image: SeventyTwoPin
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

export { productsArray, repairArray, getProductData };