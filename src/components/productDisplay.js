import { productsArray } from "../productsStore";
import ProductCard from "../components/productCard";
import { Row, Col } from "react-bootstrap";

const ProductDisplay = () => {
    return (
        <div>
            <Row xs={1} md={3} className="store">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
};

export default ProductDisplay;