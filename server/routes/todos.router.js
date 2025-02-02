const router = require('express').Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    console.log('GET in /toDo');
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


module.exports = router;
