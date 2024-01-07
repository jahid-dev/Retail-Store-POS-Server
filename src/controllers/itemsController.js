const itemsModel = require("../models/itemsModel");

exports.getItems = async (req, res) => {
  try {
    const items = await itemsModel.find();
    res.send(items);
  } catch (error) {
    res.status(400).json(error);
  }
};
