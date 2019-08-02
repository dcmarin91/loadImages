const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require("cors");
const app = express();
app.use(cors());


app.post('/', upload.single('image'), (req, res) => {
  console.log(req.image)
});

app.get('/', (req, res) => {
    console.log("res.file")
  });

app.listen(3001, () => console.log('Escuchando en el puerto 3001!'))