const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes)



app.listen(4000,()=>{
    console.log('Server Work 4000')
})