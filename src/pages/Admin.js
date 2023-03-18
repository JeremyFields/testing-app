import { GameCreateForm } from '../ui-components';
import { OrderUpdateForm } from '../ui-components';
import '../App.css';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);

const Admin = () => {
    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <main>
                    <h1 class="title">Hello, Admin.</h1>
                    <div>
                        <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Add new game to database:</h4>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* <GameCreateForm style={{ width: "20rem" }} /> */}
                        <OrderUpdateForm />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button class="signout-button" onClick={signOut}>Sign out</Button>
                    </div>

                </main>
            )}
        </Authenticator>
    );
}
export default Admin;