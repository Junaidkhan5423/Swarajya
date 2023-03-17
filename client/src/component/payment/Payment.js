import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51MjJ14SGWzkvtaSz5vECPT3ax7qieIxHLWNRKbW7CIZUeyGSNCMlFZ8QszBMmCnFRDy6Q971lhQWD73hE1OXbwMs00pbUZ7Kcj');

function Payment() {
 

const PUBLIC_KEY = "pk_test_rgWMA3zxjAtwaB6iV8b5W40x"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


	return (
		<Elements stripe={stripeTestPromise}>
			<CheckoutForm />
		</Elements>
	)
}
// const navigate = useNavigate()

//     const handleClick = async () => {

//         // Get Stripe.js instance
//         const stripe = await stripePromise;
//         // Call your backend to create the Checkout Session
//         const response = await fetch(
//           "http://localhost:9002/payment",
//           {
//             method: "POST",
//           }
//         );
//         const session = await response.json();
//         // When the customer clicks on the button, redirect them to Checkout.
//         const result = await stripe.redirectToCheckout({
//           sessionId: session.id,
//         }).then(()=>{
//             console.log('StripePaymentSuccess');

//         });
//         console.log(result);
        
//         if (result.error) {
//         //   If `redirectToCheckout` fails due to a browser or network
//         //   error, display the localized error message to your customer
//         //   using `result.error.message`.
//         navigate('/StripePaymentCancel')

//         }else{
//             navigate('/StripePaymentSuccess')
//         }
//       };
//   return (
//     <div style={{ margin: "5%" }}>
//     <img
//       style={{ width: "20%", border: "1px gray solid" }}
//       src="/images/tshirt.png"
//     ></img>
//     <h4>You have selected T-shirt</h4>
//     <h4>Amount: 200 (INR)</h4>
//     <p>Once click on pay, you will be redirected to our Payment gateway.</p>
//     <button role="link" onClick={handleClick}>
//       Click here to Pay
//     </button>
//   </div>
//   );
// };
export default Payment