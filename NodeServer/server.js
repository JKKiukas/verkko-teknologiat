var todoList = [
    { "id": 1,
        "title": "First todo",
        "description": "Pick up milk",
        "complete": 'Yes',
        "canceled": 'Yes',
        "date": '16.12.2019'
    },
    { "id": 2,
        "title": "Second todo",
        "description": "Send email",
        "complete": 'No',
        "canceled": 'No',
        "date": '16.12.2019'
    },
    { "id": 3,
        "title": "Third todo",
        "description": "Go for a run",
        "complete": 'No',
        "canceled": 'No',
        "date": '16.12.2019'
    }];

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function (req, res) {
    res.redirect('/tasks');
});

app.get('/tasks', function (req, res) {
    res.send(JSON.stringify(todoList));
});

app.post('/tasks', function (req, res) {
    teeJotain(function () {
        res.send("Jotain tehtiin");
    });
});

app.get('/tasks/:id', function (req, res) {
    var id = req.params.id;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            return res.send(todoList[i]);
        }
    }
    res.send('Not found')
});

app.listen(8080);
