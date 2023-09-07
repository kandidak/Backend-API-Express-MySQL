const MainTitle = require("../models/MainTitleModel.js");
const multer = require('multer');

class FileController {
  static async uploadFile(req, res) {
    try {
      const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'C:/inetpub/wwwroot/dhifarindo/files');
        },
        filename: function (req, file, cb) {
          cb(null, new Date().toISOString() + file.originalname);
        }
      });

      const upload = multer({ storage: storage })
      console.log('file', upload)

      res.status(200).json({ message: "Success" });
    } catch (error) {
      console.error("Error fetching file name:", error);
      res.status(500).json({ error: "Error fetching file name" });
    }
  }

  static async downloadFile(req, res) {
    const fileName = req.params.fileName;

    try {
      var path = 'C:/inetpub/wwwroot/dhifarindo/files';
      res.download(path + '/' + fileName, fileName, (err) => {
        if (err) {
          res.status(500).send({ message: `${err}` });
        }
      });
    } catch (error) {
      console.error("Error fetching file name:", error);
      res.status(500).json({ error: "Error fetching file name" });
    }
  }
}

module.exports = FileController;