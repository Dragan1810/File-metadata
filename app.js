const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest:'uploads/'})
const path = require('path');
//const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname,"./public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/',(req,res,next)=>{
    res.send('index');
});

app.post('/fileupload',upload.single('filetoupload'), (req, res) => {
  res.json(req.file.size);
});

app.listen(3000,()=>console.log("Server Runing !!!"))