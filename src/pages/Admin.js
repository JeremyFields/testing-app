import { GameCreateForm } from '../ui-components';
import '../App.css';
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);

const Admin = ({ signOut, user }) => {
    return (
        <>
            <h1>Admin</h1>
            <div>
                <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Add new game to database:</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GameCreateForm style={{ width: "20rem" }} />
            </div>
            <Button onClick={signOut}>Sign out</Button>
        </>
    );
}

export default withAuthenticator(Admin);