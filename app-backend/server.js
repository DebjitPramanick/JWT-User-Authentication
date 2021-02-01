const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const connect  = require("./config/connect.js")


// Getting routes

const userRoute = require("./routes/users.js");

let PORT = process.env.PORT || 5000;

app.use(express.json({extended: false})); // It makes a req and parse some data

connect();

app.get('/',(req,res) => {
    res.send("Hurray server is running.")
})


app.use("/api/users", userRoute);





app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}....`);
});