const express = require("express");

const router = express.Router();

const auth = require("./auth");
const patient = require("./patient");
const profile = require("./profile");
const report = require("./report");

router.use("/auth", auth);
router.use("/patient", patient);
router.use("/profile", profile);
router.use("/report", report);

module.exports = router;
