const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const db = require("./models")
db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 3001, ()=>{
        console.log("server started!")
    })
}).catch((err)=>{
    console.log(`ERROR: ${err.message}`)
});