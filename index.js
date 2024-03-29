var express = require('express');
var cors = require('cors');
require('dotenv').config()
// ADD MULTER ↓↓
const multer = require('multer');
// 
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

// --- MY CODE STARTS HERE ---
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
app.post("/api/fileanalyse", multer({dest:'api/fileanalyse'}).single('upfile'), (req, res)=>{
  // let file = req.multer.upfile;
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})