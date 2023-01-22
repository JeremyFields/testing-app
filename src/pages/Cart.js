import { DataStore } from '@aws-amplify/datastore';
import { Order } from '../models';

const Cart = () => {
    return (
        <input
            type="button"
            value="Submit Order"
            onClick={async () => {
                try {
                    await DataStore.save(
                        new Order({
                            "customerName": "Jeremy Henderson",
                            "customerAddress": "222 N. 222th Ave. Mesa, AZ 85212",
                            "games": ["Killer Instinct"]
                        })
                    )
                    alert("Success")
                } catch (error) {
                    alert("Unsuccessful")
                }

            }}
        />
    )
};


export default Cart;
