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

  app.post('/login', (req, res)=>{
    const { email, password } = req.body
    console.log(email,password)
    client.query(`Select * from  userinfo where email='${email}' and pass='${password}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            
        }
    });
    client.end;
})



  app.post('/users', (req, res)=> {
    const user = req.body;

    client.query(`SELECT * FROM userinfo WHERE email='${user.email}'`, (err, result)=>{
        if(!err){
            if(result.rows[0]){
                return res.send('Email already in use')
            }
        }
    })
    client.end;

    let insertQuery = `INSERT INTO userinfo( fullname, email, pass,role) 
                       VALUES('${user.name}', '${user.email}', '${user.password}','${user.role}')`

    client.query(insertQuery, (err, result)=>
    {
        if(!err){
           return res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.post('/add-task', (req, res)=> {
    const {inputref,user_id} = req.body;
   
    let insertQuery = `INSERT INTO tasks(task,userinfo_id) 
                       VALUES('${inputref._value}','${user_id}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.get('/gettask/:id', (req, res) => {
    client.query(`SELECT * FROM tasks where userinfo_id=${req.params.id}`, (error, results, fields) => {
          if (error) throw error;
          res.send(results.rows);
        });
      });

      app.get('/getadmintask', (req, res) => {
        client.query('SELECT * FROM tasks', (error, results, fields) => {
              if (error) throw error;
              res.send(results.rows);
            });
          });


      app.delete('/deletetask/:id', (req, res)=> {
        let insertQuery = `delete from tasks where task_id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })