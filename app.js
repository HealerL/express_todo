const express = require('express');
const todoRouters = require('./controlllers/route')

const app = express();

const hostname = 'localhost';
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

// 路由部分
todoRouters(app);


app.listen(port, function(){
    console.log(`Server running at http://${hostname}:${port}`);
})
