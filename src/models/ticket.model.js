import { Schema, model } from 'mongoose'

const ticketColecction = 'tickets'

const ticketSchema = new Schema({
  code: String,
  purchase_datetime:{
    type: Date,
    default: Date.now,
    required: true
},
  amount: Number,
  purchaser: String
})

export default model(ticketColecction, ticketSchema)
