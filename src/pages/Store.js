import mario from "../images/supermario64.jpg"
import zelda from "../images/zelda64.jpg"
import { Row, Col } from "react-bootstrap";
import '../App.css';
import { productsArray } from "../productsStore";
import ProductCard from "../components/productCard";

const Store = () => {
    return (
        <div>
            <h1 class="title">Store</h1>
            <Row xs={1} md={3} className="store">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}


            </Row>
            {/* <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <p>Super Mario 64</p>
                        <img class="products" src={mario} alt="Super Mario 64"></img>
                    </div>
                    <div class="col-sm">
                        <p>Legend of Zelda</p>
                        <img class="products" src={zelda} alt="Zelda 64"></img>
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                </div>
            </div> */}
        </div>
    )
};

export default Store;