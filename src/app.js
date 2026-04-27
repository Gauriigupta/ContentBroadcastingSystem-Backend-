const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/auth', require('./routes/auth.routes.js'));
app.use('/api/content', require('./routes/content.routes.js'));
app.use('/content', require('./routes/public.routes.js')); 

module.exports = app;