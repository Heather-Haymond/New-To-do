const router = require('express').Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    console.log('GET in /todo');
    //sql is similar to axios. it directs info to the DB
    const sqlText = `
          SELECT * FROM todos
          ORDER BY id;
  `;
//pool
pool
.query(sqlText)
.then((dbResult) => {
    let todoTask = dbResult.rows;
    res.send(todoTask);
})
.catch((dbError) => {
    console.log('Get error in server:', dbError);
    res.sendStatus(500);    
   });
});

// POST: Create a new to-do
router.post('/', (req, res) => {
    const { text } = req.body;
    const sqlText = 'INSERT INTO todos (text) VALUES ($1) RETURNING *';
    pool.query(sqlText, [text])
      .then((dbResult) => {
          res.json(dbResult.rows[0]);  // Send the new to-do as JSON
      })
      .catch((err) => {
          console.error('Error with POST /toDo:', err);
          res.sendStatus(500);  // Internal server error
      });
});

// PUT: Mark to-do as complete
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const sqlText = `
      UPDATE todos 
      SET isComplete = TRUE, completedAt = NOW() 
      WHERE id = $1 
      RETURNING *`;
    pool.query(sqlText, [id])
      .then((dbResult) => {
          res.json(dbResult.rows[0]);  // Send the updated to-do as JSON
      })
      .catch((err) => {
          console.error('Error with PUT /toDo:', err);
          res.sendStatus(500);  // Internal server error
      });
});

// DELETE: Remove a to-do
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sqlText = 'DELETE FROM todos WHERE id = $1';
    pool.query(sqlText, [id])
      .then(() => {
          res.sendStatus(204);  // No content
      })
      .catch((err) => {
          console.error('Error with DELETE /toDo:', err);
          res.sendStatus(500);  // Internal server error
      });
});



module.exports = router;
