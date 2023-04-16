import Mario from "./images/super-mario-bros-.jpg";
import Mariobros3 from "./images/supermariobros3.jpg"
import Zelda from "./images/legendofzelda.jpg";
import DonkeyKong from "./images/donkeykong(NES).jpg";
import Earthbound from "./images/mother.jpeg";
import PunchOut from "./images/Punch-Out.jpg";
import BionicCommando from "./images/Bionic_Commando_NES_boxart.jpg"
import Castlevania from "./images/Castlevania_III_Dracula's_Curse.jpg"
import Contra from "./images/contra.jpg"
import Crystalis from "./images/Crystalis_NES_Box_Artwork.jpg"
import DuckTales from "./images/ducktales.jpg"
import Excitebike from "./images/excitebike.jpg"
import KirbysAdventure from "./images/Kirbys_Adventure.jpg"
import LifeForce from "./images/Life_Force_NES_box.jpg"
import MegeMan2 from "./images/Megaman2_box.jpg"
import Metroid from "./images/metroid.jpg"
import NinjaGaiden from "./images/ninja-gaiden.jpg"
import RiverCityRansom from "./images/river-city-ransom.jpg"
import SeventyTwoPin from "./images/72pinconnector.jpg";
import ControllerOutlet from "./images/controller_outlet.jpeg"
import CartridgeTray from "./images/cartridge_tray.jpg"
import Springs from "./images/Springs.jpeg"
import Motherboard from "./images/motherboard.jpg"

// product array
const productsArray = [
    {
        id: "82a16873-7c09-4470-b802-9688fd0e937d",
        title: "Donkey Kong",
        price: 5.00,
        image: DonkeyKong,
        citation: "Donkey Kong. (n.d.). aaronisland.blogspot.com. https://1.bp.blogspot.com/-Yf3jrPwaiBc/U99icE6gdMI/AAAAAAAACuo/usysYIOfng8/s1600/Car%C3%A1tula_Donkey_Kong_(NES).jpg"
    },
    {
        id: "efb4fb02-06ec-4ba4-a782-c548b01fb016",
        title: "Earthbound",
        price: 5.00,
        image: Earthbound,
        citation: "Earthbound. (n.d.). thecoverproject.net. https://coverproject.sfo2.cdn.digitaloceanspaces.com/nes/nes_mother_label_jp_thumb.jpg"
    },
    {
        id: "e5b2bd94-348a-4230-86d6-a03ac7ed262b",
        title: "Bionic Commando",
        price: 5.00,
        image: BionicCommando,
        citation: "Bionic Commando. (n.d.). cdn.wikimg.net. https://cdn.wikimg.net/en/strategywiki/images/thumb/7/7f/Bionic_Commando_NES_boxart.jpg/250px-Bionic_Commando_NES_boxart.jpg"
    },
    {
        id: "d998999c-d1c8-4363-a0d8-af429ee8e641",
        title: "Castlevania III: Dracula's Curse",
        price: 4.00,
        image: Castlevania,
        citation: "Castlevania 3: Dracula’s Curse. (n.d.). wikimedia.org. https://upload.wikimedia.org/wikipedia/en/9/95/Castlevania_III_Dracula's_Curse.jpg"
    },
    {
        id: "fd592153-625f-4bfc-8cc8-305c09097ad0",
        title: "Contra",
        price: 4.00,
        image: Contra,
        citation: "Contra. (n.d.). retro.gg. https://retro.gg/img/covers/576-contra.jpg"
    },
    {
        id: "a17da0fe-7417-4d72-b11d-217bde25b95c",
        title: "Cyrstalis",
        price: 5.00,
        image: Crystalis,
        citation: "Crystalis. (n.d.). wikimg.net. https://cdn.wikimg.net/en/strategywiki/images/thumb/9/95/Crystalis_NES_Box_Artwork.jpg/250px-Crystalis_NES_Box_Artwork.jpg"
    },
    {
        id: "e3b2b7e4-a90f-4e41-aa1b-cf60d59a966d",
        title: "Ducktales",
        price: 3.00,
        image: DuckTales,
        citation: "Duck Tales. (n.d.). blogspot.com. https://2.bp.blogspot.com/-V6p37tUqLTY/Uu0COm9hGkI/AAAAAAAAC9Y/gWcuAGzld3I/s1600/ducktales+capa.jpg"
    },
    {
        id: "7ab0f9f4-b86b-4d5d-8aa3-8bd0ac3f58aa",
        title: "Excitebike",
        price: 5.00,
        image: Excitebike,
        citation: "Excitebike. (n.d.). retro.gg. https://retro.gg/img/covers/404-excitebike.jpg"
    },
    {
        id: "8c6a0bfb-f9eb-428a-b89c-e7134b8dd32b",
        title: "Kirby's Adventure",
        price: 5.00,
        image: KirbysAdventure,
        citation: "Kirby’s Adventure. (n.d.). gronkh-wiki.de. https://gronkh-wiki.de/images/thumb/1/19/Kirbys_Adventure.jpg/250px-Kirbys_Adventure.jpg"
    },
    {
        id: "10d5f6e3-1036-4c79-b523-d16a1d789145",
        title: "Zelda",
        price: 5.00,
        image: Zelda,
        citation: "The Legend of Zelda. (n.d.). wikimg.net. https://cdn.wikimg.net/en/strategywiki/images/b/b7/LOZ_NES_box.jpg"
    },
    {
        id: "c4b259af-a5cf-468b-8dc2-9ff1b451d6e4",
        title: "Life Force",
        price: 5.00,
        image: LifeForce,
        citation: "Life Force. (n.d.). wikimg.net. https://cdn.wikimg.net/strategywiki/images/thumb/c/cd/Life_Force_NES_box.jpg/250px-Life_Force_NES_box.jpg"
    },
    {
        id: "506b2164-7bea-4ff1-8864-b21ad8bc25c5",
        title: "Mega Man 2",
        price: 5.00,
        image: MegeMan2,
        citation: "Mega Man 2. (n.d.). wikimedia.org. https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Megaman2_box.jpg/220px-Megaman2_box.jpg"
    },
    {
        id: "1a7647fb-0cdd-464c-94b7-115616e4eb6b",
        title: "Metroid",
        price: 5.00,
        image: Metroid,
        citation: "Metroid. (n.d.). images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com. https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6cbcca68-db09-48b9-a2ce-afb57ace8540/d7e9g2e-38c62c02-8b17-41a2-a5f5-8f09c33f59d4.jpg/v1/fill/w_600,h_821,q_75,strp/metroid__nes__8_bits___composition_poster_by_postalesdeamor-d7e9g2e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzZjYmNjYTY4LWRiMDktNDhiOS1hMmNlLWFmYjU3YWNlODU0MC9kN2U5ZzJlLTM4YzYyYzAyLThiMTctNDFhMi1hNWY1LThmMDljMzNmNTlkNC5qcGciLCJ3aWR0aCI6Ijw9NjAwIiwiaGVpZ2h0IjoiPD04MjEifV1dLCJ3bWsiOnsicGF0aCI6Ii93bS82Y2JjY2E2OC1kYjA5LTQ4YjktYTJjZS1hZmI1N2FjZTg1NDAvcG9zdGFsZXNkZWFtb3ItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.euFg-09SRi2vLSCtm5Cd3Ct3Nb0y-Xzr8Ok2-6drwq4"
    },
    {
        id: "3e015be2-c335-473b-9e04-a7b10f34cef7",
        title: "Ninja Gaiden",
        price: 5.00,
        image: NinjaGaiden,
        citation: "Ninja Gaiden. (n.d.). retro.gg. https://retro.gg/img/covers/317-ninja-gaiden.jpg"
    },
    {
        id: "37e6d03f-d2a4-4105-80e1-562a93077361",
        title: "Punch Out!!!",
        price: 5.00,
        image: PunchOut,
        citation: "Punch-Out. (n.d.). wiki.dolphin-emu.org. https://wiki.dolphin-emu.org/images/thumb/a/a4/Punch-Out%E2%80%BC_(NES).jpg/300px-Punch-Out%E2%80%BC_(NES).jpg"
    },
    {
        id: "bf5deb56-599b-40e9-b915-9b169b9079ae",
        title: "River City Ransom",
        price: 5.00,
        image: RiverCityRansom,
        citation: "River City Ransom. (n.d.). retro.gg. https://retro.gg/img/covers/496-river-city-ransom.jpg"
    },
    {
        id: "0a427670-8376-4f3d-9353-5b2896bda214",
        title: "Super Mario Bros",
        price: 5.00,
        image: Mario,
        citation: "Super Mario Bros. (n.d.). retro.gg. https://retro.gg/img/covers/261-super-mario-bros-.jpg"
    },
    {
        id: "b58458a9-c86a-4085-9a56-88d91e609df5",
        title: "Super Mario Bros 3",
        price: 5.00,
        image: Mariobros3,
        citation: "Super Mario Bros. 3. (n.d.). bp.blogspot.com. https://3.bp.blogspot.com/_WaXspDnBJ2c/TPMG_YSMN8I/AAAAAAAAC6A/JZF7yGnZ1d0/w1200-h630-p-k-no-nu/box.jpg"
    }
]

// repair array
const repairArray = [
    {
        id: "413c38a9-c125-470c-8d6f-41baa773962e",
        title: "72-Pin Repair",
        price: 10.00,
        image: SeventyTwoPin,
        citation: "72-Pin Repair. (n.d.). aliexpress.us. https://www.aliexpress.us/item/3256802322961839.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US"
    },
    {
        id: "76f0d97c-3309-48d1-a1a8-4e27ffb15091",
        title: "Controller Outlet Repair",
        price: 10.00,
        image: ControllerOutlet,
        citation: "Controller Outlet. (n.d.). d3nevzfk7ii3be.cloudfront.net. https://d3nevzfk7ii3be.cloudfront.net/igi/K26anyAAOi2oS4lD.medium"
    },
    {
        id: "f5322132-60cb-44a5-baae-f82a5926f530",
        title: "Cartridge Tray Repair",
        price: 10.00,
        image: CartridgeTray,
        citation: "Cartridge Tray Repair. (n.d.). fullyretro.com. https://www.fullyretro.com/images/items/35584426-item-big-NES-REPCTRAY-A-1.jpg"
    },
    {
        id: "26bb4a20-9006-456d-bd9d-f4d5114846db",
        title: "Cartridge Tray Springs Repair",
        price: 10.00,
        image: Springs,
        citation: "Cartridge Spring. (n.d.). /d3nevzfk7ii3be.cloudfront.net. https://d3nevzfk7ii3be.cloudfront.net/igi/BshOcLNluExlOWbE.full"
    },
    {
        id: "8a93d46a-2b9b-4826-b29e-9b6306342575",
        title: "Motherboard Repair",
        price: 10.00,
        image: Motherboard,
        citation: "Nintendo Motherboard. (n.d.). wikimedia.org. https://upload.wikimedia.org/wikipedia/commons/9/99/Nintendo-Entertainment-System-NES-Motherboard-BL.jpg"
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        console.log("Checking if ID exists in repairArray...")
        productData = repairArray.find(product => product.id === id);
    }

    if (productData === undefined) {
        console.log("Product / Repair data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, repairArray, getProductData };