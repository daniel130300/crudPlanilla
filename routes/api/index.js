var express = require('express');
var router = express.Router();

const routerPlanilla = require('./planilla');
const routerSecurity = require('./security');

router.use("/planilla", routerPlanilla);
router.use("/security", routerSecurity);

module.exports = router;