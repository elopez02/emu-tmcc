var express = require('express');
var router = express.Router();
const path = require('path');

// El query "type" solo es para desarrollo local.
router.get('/:assets_id', (req, res) => {
  const query = req.query;
  file = req.params.assets_id;
  // if( query.aliado ) {
  //   file = `${file}-A${query.aliado}`
  // }
  // if( query.pais ) {
  //   file = `${file}-P${query.pais}`
  // }
  // if( query.modulo ) {
  //   file = `${file}-M${query.modulo}`
  // }
  // if( query.canal ) {
  //   file = `${file}-C${query.canal}`
  // }
  // if( query.lenguaje ) {
  //   file = `${file}-L${query.lenguaje}`
  // }
  // file = `${file}.${query.type}`
  res.sendFile(file, { root: path.join(__dirname, '../assets') });
});

module.exports = router;