const express = require('express');
const router = express.Router();

// This is where the calculation happens
router.post('/calculate', (req, res) => {
  // 1. Get units from the frontend
  const units = req.body.units;

  // 2. Simple Math: Multiply units by a rate (e.g., ₹7)
  const rate = 7;
  const baseAmount = units * rate;

  // 3. Calculate 18% GST (Tax)
  const tax = baseAmount * 0.18;

  // 4. Final Total
  const total = baseAmount + tax;

  // 5. Send the results back to the browser
  res.json({
    units: units,
    baseAmount: baseAmount.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(0),
    tip: units > 5 ? "Try to save energy!" : "Good job on saving energy!",
    dailyLimit: 5
  });
});

module.exports = router;
