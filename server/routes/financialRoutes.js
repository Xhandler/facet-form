const { Router } = require('express');
const router = new Router();
const Financial  = require('../database/financial');

router.get('/report', async (req, res) => {
  const report = await Financial.getFinanicalReport();
  res.status(200).json(report);
});
router.post('/entry', async (req, res) => {
  try {
    const {entryAmount, entryName, entryType} = req.body;
    if (!entryAmount || !entryName  || !entryType)
      return res.status(400).json({message: 'Invalid Entry!'});

    await Financial.createEntry({ entryAmount, entryName, entryType });

    const report = await Financial.getFinanicalReport();

    return res.status(200).json(report);
  } catch (error) {
    console.error(
      `createEntry(...)) >> Error: ${error.stack}`
    );
    res.status(500).json();
  }
});
router.delete('/entry', async (req, res) => {
    try {
      const { id } = req.body;
      await Financial.removeEntry(id);

      const report = await Financial.getFinanicalReport();
      return res.status(200).json(report);
    } catch (error) {
      console.error(
        `Error: ${error.stack}`
      );
      res.status(500).json();
    }
  });

module.exports = router;