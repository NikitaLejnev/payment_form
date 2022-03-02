const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    cardNumber: {
      type: Number,
      required: true,
    },
    expDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment;
