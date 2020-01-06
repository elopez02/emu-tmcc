var express = require('express');
var router = express.Router();
const path = require('path');

// El query "type" solo es para desarrollo local.

const respuesta = (req, res) => {
    res.json({
      esSuceptible: true
    });
};

router.get('/:data_id', respuesta);
router.get('/:data_id/:filtro', respuesta);

module.exports = router;