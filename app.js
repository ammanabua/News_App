const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const moment = require("moment");

app.locals.moment = moment;

//template engine

app.use(express.static("public"));
app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/news"));


app.set("views", "./views");



const port = process.env.PORT||3000;

app.listen(port,()=> console.log("App is currently running on PORT 3000"));