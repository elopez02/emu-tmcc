var express = require('express');
var router = express.Router();

const IncomingForm = require('formidable').IncomingForm;

router.post('/', (req, res) => {
  console.log(req.body);
  var form = new IncomingForm();
  let readStream;
  form
  .on('fileBegin', (name, file) => {
    console.log('Archivo Recibido');
  })
  .on('end', () => {
    res.json({
      data: {
        status: true,
        imagesRef: {
          img_frontDni: 'frontDni',
          img_backDni: 'backDni',
          img_face: 'face'
        }
      }
    })
  })
  .on('file', (field, file) => {
    console.log(file);
  })
  .parse(req);
});

module.exports = router;