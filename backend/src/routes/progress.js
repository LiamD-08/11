const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/:userId', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM user_progress WHERE user_id = $1', [req.params.userId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
