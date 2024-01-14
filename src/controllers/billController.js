
const BillModel = require("../models/billModel");

exports.chargeBill = async (req, res) => {
  try {
    const newbill = new BillModel(req.body)
    await newbill.save()
    res.send('Bill charged successfully')
  } catch (error) {
    res.status(400).json(error);
  }
};


exports.getAllBills = async (req, res) => {
  try {
    const bills = await BillModel.find()
    res.send(bills)
  } catch (error) {
    res.status(400).json(error);
  }
};