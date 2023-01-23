import { DataStore } from '@aws-amplify/datastore';
import { Order } from '../models';
import { Auth } from 'aws-amplify';

// const user = await Auth.currentAuthenticatedUser();

const Cart = () => {
    return (
        <div>
            <h1 class="title">Shopping Cart</h1>
            <h3>Shipping Information</h3>
            <div class="contact-main">
                <form class="contact-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="shipping-name" placeholder="John Doe" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="shipping-email" placeholder="name@example.com" />
                    </div>
                    <div class="button">
                        <button class="form-submit">Submit form</button>
                    </div>
                </form>
                <div class="submit-order">
                    <input
                        type="button"
                        value="Submit Order"
                        onClick={async () => {
                            try {
                                await DataStore.save(
                                    new Order({
                                        "customerName": "Paul",
                                        "customerAddress": "222 N. 798th St. Mesa, AZ 85212",
                                        "games": ["Killer Instinct"]
                                    })
                                )
                                alert("Success")
                            } catch (error) {
                                alert("Unsuccessful")
                            }
                        }}
                    />
                </div>
            </div>
        </div>)
};

export default Cart;
