const functions = require('firebase-functions');
const express = require("express")
const cors = require('cors');
const { request, response } = require('express');
const stripe =  require('stripe')('sk_test_51HeuvRA2ZQSEma90Y6w5DXGRuZR50emgBGbo0NXbupbViXUen5f5zoNHD6pasDw1Hshi4sb1XcrPvbAa8hID9xtz00nDkIhTBA')

const app = express()
app.use(cors({
    origin:true
}))

app.get('/',(req,res)=>
    res.status(200).send('Hello World')
)
app.post('/payments/create', async (req,res)=>{
    const total = request.query.total
    console.log("Rec=ve",total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
exports.api = functions.https.onRequest(app)

//http://localhost:5001/fir-f0bb6/us-central1/api
