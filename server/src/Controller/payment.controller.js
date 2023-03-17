const stripe = require('stripe')('sk_test_51MjJ14SGWzkvtaSzaR1YFCNjrwKPGYJM98oA9D3DVTNeuTc9uaeNAqwPfNLVSvERPUjLErrHFDvqNcFKXQzGGlqk00ZoNQeDwz') 

const payment = async (req , res )=>{
try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: "T-shirt",
              },
              unit_amount: 4000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/stripepaymentsuccess",
        cancel_url: "http://localhost:3000/stripepaymentcancel",
      });
      console.log(session);
      res.json({ id: session.id ,
                success:true
    });
} catch (error) {
    res.status(500).send({ message: error })
}
}
 module.exports = {payment}