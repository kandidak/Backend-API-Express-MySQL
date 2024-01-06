const path = require("path");

class FileController {
  static async uploadFile(req, res) {
    try {
      res.status(200).json({ message: "Success" });
    } catch (error) {
      console.error("Error fetching file name:", error);
      res.status(500).json({ error: "Error fetching file name" });
    }
  }

  static async downloadFile(req, res) {
    const fileName = req.params.fileName;

    try {
      const filePath = '/dhifarindo/files'
      const fileUrl = `${filePath}/${fileName}`;
      const fullPath = path.join(__dirname, '..', filePath, fileName);

      res.download(fullPath, fileName, (err) => {
        if (err) {
          console.error("Error downloading file:", err);
          res.status(500).json({ error: err });
        }
      });
      // var path = 'C:/inetpub/wwwroot/dhifarindo/files';
      // res.download(path + '/' + fileName, fileName, (err) => {
      //   if (err) {
      //     res.status(500).send({ message: `${err}` });
      //   }
      // });
    } catch (error) {
      console.error("Error fetching file name:", error);
      res.status(500).json({ error: "Error fetching file name" });
    }
  }
}

module.exports = FileController;