import { repairArray } from "../productsStore";
import RepairCard from "../components/productCard";
import { Row, Col } from "react-bootstrap";

const RepairDisplay = () => {
    return (
        <div>
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

export default RepairDisplay;