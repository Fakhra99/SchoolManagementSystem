const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/admin.controller');


router.post("/api/login", admincontroller.createAdmin);


module.exports = router;
