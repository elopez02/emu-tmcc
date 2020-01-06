var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
      ip: '10.224.167.53'
  });
});

module.exports = router;