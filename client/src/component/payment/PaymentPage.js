import React from 'react'
import './payment.css'
import Qrcode from "../../images/QRCODe.jpeg"

function PaymentPage() {
  return (
<div class="container">
   <div class="row">
      <div class="col-md-12 mx-auto mt-5">
         <div class="payment">
            <div class="payment_header">
               <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div class="payment-content">
               <h1>Payment is Pending </h1>
               <p>Your addmission is pending Please pay the fees</p>
               <img src={Qrcode}/>
               {/* <a href="#">Go to Home</a> */}
            </div>
            
         </div>
      </div>
   </div>
</div>

  )
}

export default PaymentPage