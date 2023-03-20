const express = require('express')
const cors = require('cors')
const app = express()
const client = require('./connection')

app.use(cors())
app.use(express.json())
const PORT = 5000
app.listen(PORT,console.log(`Server is running at ${PORT}`))


app.get('/users', (req, res) => {
client.query('SELECT * FROM userinfo', (error, results, fields) => {
      if (error) throw error;
      res.send(results.rows);
    });
  });


  app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT INTO userinfo( fullname, email, pass) 
                       VALUES('${user.name}', '${user.email}', '${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.post('/add-task', (req, res)=> {
    const user = req.body;
    
    let insertQuery = `INSERT INTO tasks(task) 
                       VALUES('${user._value}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.get('/gettask', (req, res) => {
    client.query('SELECT * FROM tasks', (error, results, fields) => {
          if (error) throw error;
          res.send(results.rows);
        });
      });


      app.delete('/deletetask/:id', (req, res)=> {
        let insertQuery = `delete from tasks where id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })