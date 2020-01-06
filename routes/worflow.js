var express = require('express');
var router = express.Router();
var datos = null;
var flujo = '';

countrie = (req, res, next) => {
  console.clear();
  flujo = req.body.assertion;
  datos = require(`../OTPs/${req.body.assertion}`);
  req.body = { token: datos.token}
  next();
};

router.post('/workflow', (req, res) => {
  console.clear();
  console.log(req.body);
  var paso = req.body.stepId;
  var response = {
    data: {
      status: datos[datos.workflow[paso]].status,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[datos.workflow[paso]].payload,
      stepId: datos.workflow[paso]
    },
    errors: []
  };
  console.log('==============================================================================');
  console.warn(response);
  console.log('==============================================================================');
  res.json(response);
});

// access_token

// {
//   "iss": "Online JWT Builder",
//   "iat": 1565906011,
//   "exp": 1597442011,
//   "aud": "www.example.com",
//   "sub": "jrocket@example.com",
//   "cliendtID": "0123456789",
//   "partner": "ML",
//   "product": "CAM",
//   "lenguaje": "es-CR",
//   "canal": "web",
//   "pais": "CR",
//   "modulo": "que???"
// }

router.post('/auth', countrie, (req, res) => {
  res.json({
    state:1, 
    access_token: req.body.token,
    refresh_token:'abslslRSkskED2233ksksk82sss7jjsjjsRRksksF92DDD'
  });
});

module.exports = router;