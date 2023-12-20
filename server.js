
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();


connectDb();
const app = express();

const port = process.env.PORT || 5001; 

// app.use is known as the middleware
app.use(express.json()) // a middleware as well, when you want to post a request
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler)


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
