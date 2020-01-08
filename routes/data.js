var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

// El query "type" solo es para desarrollo local.

const respuesta = (req, res) => {

  var fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  // var fullUrl = ''+ req.originalUrl;

    request(fullUrl, { json: true }, (err, res2, body) => {
      if (err || res2.body.length === 0) {
        console.warn('====XXXXX>        ', fullUrl);
        const query = req.query;
        file = req.params.data_id;
        if( query.pais ) {
          // file = `${file}-P${query.pais}`
          file = `${file}`
        }
        file = `${file}.json`
        // if ( query.pais ) {
        //   res.sendFile(file, { root: path.join(__dirname, `../dataService/${query.pais}`) });
        //   return;
        // }
        res.sendFile(file, { root: path.join(__dirname, '../dataService') });
        return;
       }
       return res.json(res2.body);
    });

  
};

router.get('/:data_id', respuesta);
router.get('/:data_id/:filtro', respuesta);

module.exports = router;

// 