const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index')


app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello world!')
})


app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/', routes)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})