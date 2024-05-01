const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];

app.get('/', (req, res) => {
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
       
    };
    let today = new Date();
    let dateTime = today.toLocaleDateString("en-US", options);
    res.render("list", { KindOfDay: dateTime, newListItems: newItems });
});

app.post('/', (req, res) => {
    let newItem = req.body.newItem;
    let fromTime = req.body.fromTime;
    let toTime = req.body.toTime;
    newItems.push({ item: newItem, fromTime: fromTime, toTime: toTime });
    res.redirect('/');
});

app.listen(3000, () => console.log("Server is running on port 3000"));
