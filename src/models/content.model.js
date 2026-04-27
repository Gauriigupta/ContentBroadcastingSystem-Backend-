const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Content = sequelize.define('Content', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  subject: { type: DataTypes.STRING, allowNull: false },
  file_url: { type: DataTypes.STRING, allowNull: false },
  file_type: { type: DataTypes.STRING },
  file_size: { type: DataTypes.INTEGER },
  status: { 
    type: DataTypes.ENUM('uploaded', 'pending', 'approved', 'rejected'),
    defaultValue: 'pending' 
  },
  rejection_reason: { type: DataTypes.STRING },
  uploaded_by: { type: DataTypes.INTEGER },
  approved_by: { type: DataTypes.INTEGER },
  approved_at: { type: DataTypes.DATE }
}, { 
  timestamps: true 
});

module.exports = Content;