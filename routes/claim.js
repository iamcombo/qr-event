const express = require('express');
const { claimSEL } = require('../controller/claim');

const router = express.Router();

router
  .route('/claim')
  .post(claimSEL)

module.exports = router;