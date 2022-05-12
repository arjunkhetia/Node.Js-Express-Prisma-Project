var express = require('express');
var router = express.Router();
const prisma = require('../prisma/client');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const allUsers = await prisma.user.findMany();
  res.render('index', { title: 'Express', data: JSON.stringify(allUsers, null, 4) });
});

module.exports = router;
