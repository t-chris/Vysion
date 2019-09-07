const express = require('express');
const app = express();
const exphbs = require('express-handlebars');



app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars');

//Body parser middleware, newest version of Express.
app.use(express.json()); //express.json is middleware, based off of body-parser.
app.use(express.urlencoded({extended : false}));//for url encoded post requests.


//Homepage
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/app', async (req, res) => {
    res.render('app');
})

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
const axios = require('axios');

const getGoogleCloud = async () => (
    await axios.get('https://jsonplaceholder.typicode.com/todos/1')
);

getGoogleCloud().then(data => console.log(data.data));
