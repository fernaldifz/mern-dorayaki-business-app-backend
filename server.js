const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://mongo:27017/docker-node-mongo";
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const dorayakiRouter = require('./routes/dorayaki');
const tokoDorayakiRouter = require('./routes/toko.dorayaki');

app.use('/dorayaki', dorayakiRouter);
app.use('/tokoDorayaki', tokoDorayakiRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
