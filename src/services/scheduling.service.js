const Content = require('../models/content.model');
const { Op } = require('sequelize');

exports.getActiveContent = async (teacherId) => {
  try {
    const contents = await Content.findAll({
      where: {
        uploaded_by: teacherId,
        status: 'approved' 
      },
      order: [['id', 'ASC']] 
    });

    if (!contents || contents.length === 0) {
      return null;
    }

    const ROTATION_MINUTES = 5;
    const ROTATION_MS = ROTATION_MINUTES * 60 * 1000;
    
    const now = Date.now();
    const totalContents = contents.length;
    const activeIndex = Math.floor(now / ROTATION_MS) % totalContents;

    return contents[activeIndex];

  } catch (error) {
    console.error('Error in Scheduling Service:', error);
    return null;
  }
};