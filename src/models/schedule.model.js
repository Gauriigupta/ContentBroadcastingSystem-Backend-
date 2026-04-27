const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const Content = require('./content.model');

const ContentSlot = sequelize.define('ContentSlot', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  subject: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

const ContentSchedule = sequelize.define('ContentSchedule', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content_id: { 
    type: DataTypes.INTEGER, 
    references: { model: Content, key: 'id' } 
  },
  slot_id: { 
    type: DataTypes.INTEGER,
    references: { model: ContentSlot, key: 'id' }
  },
  rotation_order: { type: DataTypes.INTEGER, defaultValue: 0 },
  duration: { 
    type: DataTypes.INTEGER, 
    defaultValue: 5 
  }
}, { timestamps: true });

module.exports = { ContentSlot, ContentSchedule };