import File from "../models/Files";

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  try {
    const fileData = {
      fileName: req.file.originalname,
      filePath: req.file.path,
      uploadDate: new Date().toISOString(),
    };

    const newFile = await File.create(fileData);

    return res.status(200).json({ message: 'File uploaded successfully.', file: newFile });
  } catch (err) {
    console.error('Error saving file information to the database:', err);
    return res.status(500).json({ error: 'Failed to save file information to the database.' });
  }
};

export const downloadFile = async (req, res) => {
  const fileId = req.params.fileId;

  try {
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found.' });
    }

    const filePath = file.filePath;

    // Send the file as a response to the client
    res.download(filePath, file.fileName, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        return res.status(500).json({ error: 'Failed to download the file.' });
      }
    });
  } catch (err) {
    console.error('Error retrieving file information from the database:', err);
    return res.status(500).json({ error: 'Failed to retrieve file information from the database.' });
  }
};