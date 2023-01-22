// import { DataStore } from '@aws-amplify/datastore';
// import { Order } from '../models';
// import { Button } from '@aws-amplify/ui-react';

// const Sendorder = async () => {
//     try {
//         await DataStore.save(
//             new Order({
//                 "customerName": "Jeremy Matthews",
//                 "customerAddress": "111 S. 999th Ave. Mesa, AZ 85212",
//                 "games": ["Killer Instinct"]
//             })
//         )
//         alert("Success")
//     } catch (error) {
//         alert("Unsuccessful")
//     }
// };

const Cart = () => {
    return (<h1>Cart</h1>)
    // return (<Button onClick={Sendorder()}>Submit Order</Button>
    // )
}


export default Cart;
