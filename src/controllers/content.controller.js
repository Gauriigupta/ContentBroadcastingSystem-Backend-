const Content = require('../models/content.model');

exports.uploadContent = async (req, res) => {
  try {
    const { title, subject, description } = req.body;

    if (!req.file) return res.status(400).json({ error: "File is required" });

    const content = await Content.create({
      title, 
      subject, 
      description, 
      file_url: req.file.path,
      file_type: req.file.mimetype,
      file_size: req.file.size,
      uploaded_by: req.user.id,
      status: 'pending' 
    });

    res.status(201).json({ message: "Content uploaded and pending approval", content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.reviewContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, rejection_reason } = req.body; 
    const content = await Content.findByPk(id);
    if (!content) return res.status(404).json({ error: "Content not found" });

    if (status === 'rejected' && !rejection_reason) {
      return res.status(400).json({ error: "Rejection reason is required" }); 
    }

    content.status = status;
    content.rejection_reason = rejection_reason || null;
    content.approved_by = req.user.id;
    content.approved_at = status === 'approved' ? new Date() : null;

    await content.save();
    res.json({ message: `Content ${status} successfully`, content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};