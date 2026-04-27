const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

require('./models/user.model');
require('./models/content.model');
const { ContentSlot, ContentSchedule } = require('./models/schedule.model');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));


app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/content', require('./routes/content.routes'));
app.use('/content', require('./routes/public.routes'));


app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');

    await sequelize.sync({ alter: true });
    console.log('✅ Models synchronized.');

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use. Please kill the process or use a different port.`);
      } else {
        console.error('❌ Server Error:', err);
      }
    });

  } catch (error) {
    console.error('❌ Unable to start server:', error);
    process.exit(1); 
  }
};

startServer();