const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const User = sequelize.define('User', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },
  password_hash: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  role: { 
    type: DataTypes.ENUM('principal', 'teacher'), 
    allowNull: false 
  }
}, { 
  timestamps: true 
});

module.exports = User;