const express = require("express");
const router = express.Router();
const { authenticate, authorize, getGstInfo } = require("./controller");

// Authenticate route
router.post("/authenticate", authenticate);

// Authorize route
router.post("/authorize", authorize);

// Get GST info route
router.post("/gst", getGstInfo);

module.exports = router;
