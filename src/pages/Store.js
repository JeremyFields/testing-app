import { Row, Col } from "react-bootstrap";
import '../App.css';
import { productsArray, repairArray } from "../productsStore";
import ProductCard from "../components/productCard";
import RepairCard from "../components/repairCard";

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
            <br></br>
            <br></br>
            <hr
                style={{
                    color: "red",
                    backgroundColor: "grey",
                    height: 20
                }}
            />
            <Row xs={1} md={3} className="repair">
                {repairArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <RepairCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
};

export default Store;