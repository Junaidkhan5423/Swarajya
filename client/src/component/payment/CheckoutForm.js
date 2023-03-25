// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
// import React, { useState } from 'react'


// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "green",
// 			color: "#fff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "red" },
// 			"::placeholder": { color: "red" },
//             "input[type=text]":{width: "100%",
//                 padding: "12px 20px",
//                 margin: "8px 0",
//                 boxSizing: "border-box",}
// 		},
// 		invalid: {
// 			iconColor: "#red",
// 			color: "#red"
// 		}
// 	}
// }

// export default function PaymentForm() {
// //     const [success, setSuccess ] = useState(false)
// //     const stripe = useStripe()
// //     const elements = useElements()


// //     const handleSubmit = async (e) => {
// //         e.preventDefault()
// //         const {error, paymentMethod} = await stripe.createPaymentMethod({
// //             type: "card",
// //             card: elements.getElement(CardElement)
// //         })


// //     if(!error) {
// //         try {
// //             const {id} = paymentMethod
// //             const response = await axios.post("http://localhost:9002/payment", {
// //                 amount: 1000,
// //                 id
// //             })
// //             console.log(response);

// //             if(response.data.success) {
// //                 console.log("Successful payment")
// //                 setSuccess(true)
// //             }

// //         } catch (error) {
// //             console.log("Error", error)
// //         }
// //     } else {
// //         console.log(error.message)
// //     }
// // }

// //     return (
// //         <>
// //         {!success ? 
// //         <div className="card shadow-sm" style={{background:"black"}}>
// //         <div className="card-header bg-transparent border-0">
// //         <form onSubmit={handleSubmit}>
// //             <fieldset >
// //                 <div >
// //                     <CardElement options={CARD_OPTIONS}/>
// //                 </div>
// //             </fieldset>
// //             <button>Pay</button>
// //         </form>
// //         </div>
// //         </div>
// //         :
// //        <div>
// //            <h2>You Successfully purchase Course</h2>
// //        </div> 
// //         }
            
// //         </>
// //     )
// }