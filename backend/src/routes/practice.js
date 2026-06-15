const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.post('/recognition', async (req, res) => {
  try {
    const { userId, signId, correct } = req.body;
    res.json({ message: 'Recognition practice recorded', correct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/production', async (req, res) => {
  try {
    const { userId, signId, videoUrl } = req.body;
    res.json({ message: 'Production practice recorded', feedback: 'Good attempt!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
