const express = require('express');
const pug = require('pug');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// here demo.pug is sent to the server and not index.html
//demo.pug has the html code stored in index.html

app.use('/static',express.static('static'));// every file that has to be served publically has to be made static
app.use(express.urlencoded());

app.get("/",(req,res)=>{

  const params = {'title':'Your details have been successfully submitted'};
  res.status(200).render('demo.pug',params);
})

app.post("/",(req,res)=>{
  const params = {'message':'Your details have been successfully submitted'};
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  more = req.body.more;
  fs.writeFileSync('output.txt',"The name of the client is "+name+", "+age+" years old "+gender+". More about him: "+more)
  res.status(200).render('demo.pug',params);
})

app.listen(80,()=>{
  console.log("sever listening at 3000");
})
