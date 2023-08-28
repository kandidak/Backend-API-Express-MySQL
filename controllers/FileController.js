// import admin from "firebase-admin";
import MainTitle from "../models/MainTitleModel.js";
import fs from "fs";
import multer from "multer";

// admin.initializeApp({
//   credential: admin.credential.cert(firebaseConfig)
// });

// const bucket = admin.storage().bucket();


class FileController {
  static async uploadFile(req, res) {
    try {
      const file = req.file;
      const path = "C:\wwwroot\dhifarindo\files";

const maxSize = 2 * 1024 * 1024;

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __dirname+"/upload");
//   },
//   filename: (req, file, cb) => {
//     console.log(file.originalname);
//     cb(null, file.originalname);
//   },
// });
// console.log('asd',file);
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
});
fs.copyFile(file.originalname, path);
  
res.status(200).json({ message: "SUCCESS" });
    } catch (error) {
      console.error("Error storing file:", error);
      res.status(500).json({ error: "Error storing file" });
    }
  }

  static async downloadFile(req, res) {
    const fileId = req.params.id;

    try {
      const mainTitle = await MainTitle.findByPk(fileId);
      if (!mainTitle) {
        res.status(404).json({ error: "File not found" });
        return;
      }

      // Implement logic to serve/download the file
      // Here, we'll just return the file name for demonstration
      res.status(200).json({ fileName: mainTitle.title });
    } catch (error) {
      console.error("Error fetching file name:", error);
      res.status(500).json({ error: "Error fetching file name" });
    }
  }
}

export default FileController;