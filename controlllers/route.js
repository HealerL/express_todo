const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://HLL:hanleliwjt@todolist.au9jm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

// Schema 模式，规定数据类型
const todoSchema = new mongoose.Schema({
    item: String
})
//对应数据库中的表
const Todo = mongoose.model('Todo', todoSchema);

// 添加一条数据
// const itemOne = Todo({item: 'Eat breakfast'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// })

// const data = [{'item': 'Eat breakfast'}, {'item': 'Pay the bill'}]

module.exports = function(app) {
    app.get('/todo', function(req, res){
        // 取出数据
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo.ejs', {todos: data});
        })    
    });

    app.post('/todo', function(req, res){
         // 添加一条数据
        const itemOne = Todo(req.body).save(function(err){
            if(err) throw err;
            console.log('item saved');
        })

        // data.push(req.body);

        // 必须要进行回应才能出发ajax的sucess回调函数
        res.send('Success');
    });

    app.delete('/todo/:item', function(req, res){
        // 剔除删除项 将转换过的空格转换回去进行匹配
        Todo.find({item: req.params.item.replace(/-/g, ' ')}).remove(function(err, data){
            if(err) throw err;
            res.send('Deleted!');
        })

        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, "-") !== req.params.item;
        // })
        // res.send('Deleted!');
    });

}