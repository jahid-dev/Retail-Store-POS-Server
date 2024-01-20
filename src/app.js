const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const app = express();

const  itemsRoute= require('./routes/itemsRoute');
const billRoute = require('./routes/billRoute')
const userRoute = require('./routes/userRoute')

applyMiddleware(app);


app.get("/", (req, res) => {
  res.send("server is running....");
});

app.use(itemsRoute);
app.use(billRoute);
app.use(userRoute);

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;