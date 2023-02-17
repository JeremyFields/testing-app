import { CreateGame } from '../ui-components';
import '../App.css';

const Admin = () => {
    return (
        <>
            <div>
                <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Add new game to database:</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CreateGame style={{ width: "20rem" }} />
            </div>
        </>
    );
}

export default Admin;