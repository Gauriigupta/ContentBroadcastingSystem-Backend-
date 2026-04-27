const schedulingService = require('../services/scheduling.service');
const path = require('path');

exports.getLiveBroadcast = async (req, res) => {
  try {
    const { teacherId } = req.params;
    
    const activeContent = await schedulingService.getActiveContent(teacherId);

    if (!activeContent) {
      return res.status(200).json({ message: "No content available" });
    }

    const fileName = activeContent.file_url.split(path.sep).pop();
    const publicUrl = `${req.protocol}://${req.get('host')}/uploads/${fileName}`;

    res.json({
      title: activeContent.title,
      subject: activeContent.subject,
      file_url: publicUrl, 
      description: activeContent.description
    });

  } catch (error) {
    console.error("Live Broadcast Error:", error);
    res.status(200).json({ message: "No content available" });
  }
};