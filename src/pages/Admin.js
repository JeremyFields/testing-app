import { CreateGame } from '../ui-components';
import '../App.css';
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Amplify, Auth } from 'aws-amplify';
Amplify.configure(awsExports);

const Admin = ({ signOut, user }) => {

    return (
        <>
            <div>
                <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Add new game to database:</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CreateGame style={{ width: "20rem" }} />
            </div>
            <Button onClick={signOut}>Sign out</Button>
        </>
    )
};

export default withAuthenticator(Admin);