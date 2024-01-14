const itemModel = require("../models/itemsModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.send(items);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.addItems = async (req, res) => {
  try {
    const newitem = new itemModel(req.body)
    await newitem.save()
    res.send('Item added successfully')
  } catch (error) {
    res.status(400).json(error);
  }
}

exports.editItems = async (req, res) => {
  try {
    await itemModel.findOneAndUpdate({_id : req.body.itemId} , req.body)
    res.send('Item updated successfully')
  } catch (error) {
    res.status(400).json(error);
  }
}

exports.deleteItems =  async (req, res) => {
  try {
    await itemModel.findOneAndDelete({_id : req.body.itemId})
    res.send('Item deleted successfully')
  } catch (error) {
    res.status(400).json(error);
  }
}
