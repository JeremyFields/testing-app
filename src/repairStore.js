// TO DO: Update images, description?
import SeventyTwoPin from "./images/72pinconnector.jpg";
import Zelda from "./images/zelda64.jpg"
import DonkeyKong from "./images/donkeykong.jpg"
import Earthbound from "./images/earthbound.jpg"
const repairArray = [
    {
        id: "413c38a9-c125-470c-8d6f-41baa773962e",
        title: "72-Pin Connector Repair",
        price: 10.00,
        image: SeventyTwoPin
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

function getRepairData(id) {
    let repairData = repairArray.find(product => product.id === id);

    if (repairData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return repairData;
}

export { repairArray, getRepairData };