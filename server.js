var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');
var fs = require('fs');

let fileName = '';

app.use(cors());
app.use(express.json());

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'src');
  },
  filename: function(req, file, cb) {
    fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  }
});

var upload = multer({ storage: storage }).single('file');

app.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    fs.readFile(req.file.path, 'utf8', (err, data) => {
      return res.status(200).send({ ...req.file, content: data });
    });
  });
});

app.post('/download', function(req, res) {
  fileName = '1590363203814-journaling.json';
  if (!fileName) {
  // create file
  }
  fs.writeFile(`src/${fileName}`, JSON.stringify(req.body.data), function(err) {
    if (err) throw err;
    console.log('Updated!', req.body.data);
  });
  res.download(`src/${fileName}`);
  res.data = req.body.data.data;
});

app.listen(8000, function() {
  console.log('App running on port 8000');
});
