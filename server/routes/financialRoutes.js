const { Router } = require('express');
const router = new Router();
const Financial  = require('../database/financial');

router.get('/report', async (req, res) => {
  const report = await Financial.getFinanicalReport();
  console.log(report);
  res.status(200).json(report);
});
router.post('/entry', async (req, res) => {
  try {
    const {entryAmount, entryName, entryType} = req.body;

    if (!entryAmount || !entryName  || !entryType)
      return res.status(400).json({message: 'Invalid Entry!'});

    const error = await Financial.createEntry({ entryAmount, entryName, entryType });
    if(error instanceof Error)
      throw error;

    const report = await Financial.getFinanicalReport();

    return res.status(200).json(report);
  } catch (error) {
    console.error(
      `createEntry({ entryName: ${entryName} }) >> Error: ${error.stack}`
    );
    res.status(500).json();
  }
});
router.delete('/entry', async (req, res) => {
    try {
      const { id } = req.body;

      Financial.removeEntry(id);

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