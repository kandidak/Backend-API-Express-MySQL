import app from "../config/firebase.config.js";
// import firebase from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import multer from "multer";
import MainTitle from "../models/MainTitleModel.js";
import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import * as storageAdmin from "firebase-admin/storage";
// import * as serviceAccount from "../config/serviceAccountKey.json";

admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount), // Replace with your service account credentials
  storageBucket: "gs://dhifarindo-365009.appspot.com/files/",
});

const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() });

class FileUploadController {
  static async uploadFile(req, res) {
    const file = req.file;
    const fileName = file.originalname;

    // Upload file to Firebase Storage
    const destination = ref(storage, `files/${file.originalname}`);
    const metadata = {
      contentType: file.mimeType,
    };

    // const upload = await uploadBytesResumable(destination, file.buffer, metadata);

    // Store file name in MainTitle table
    // const fileName = file.originalname;

    try {
      var upload = await uploadBytesResumable(
        destination,
        file.buffer,
        metadata
      );
      var url = await getDownloadURL(upload.ref);
      res.status(200).json({
        message: "File uploaded and name stored",
        filename: fileName,
        url: url,
      });
    } catch (error) {
      console.error("Error storing file:", error);
      res.status(500).json({ error: "Error storing file" });
    }
  }

  static async downloadFile(req, res) {
    const fileName = req.params.fileName;
    const bucket = admin.storage().bucket();
    // const file = bucket.file(`files/${fileName}`); // Assuming your files are stored in a "files" directory

    const storage = getStorage();
    // const file = ref(storage, `files/${fileName}`);
    const file = ref(storage, `https://firebasestorage.googleapis.com/b/bucket/o/files%20${fileName}`);  

    // const file = bucket.getFilesStream({ prefix: fileName });
    // const asd = storageAdmin.getStorage();

    // const asd = admin.storage().bucket();
    console.log('bucket', fileName);
    // var query = {
    //     directory: 'files/'
    // };

    // const storageRef = admin.storage().bucket().getFiles(query);
    // console.log('bucket', storageRef);
    try {
      const [fileExists] = await file.exists();
      console.log("fileExists", file);
      if (!fileExists) {
        return res.status(404).send("File not found");
      }

      const downloadStream = file.createReadStream();
      downloadStream.pipe(res);
    } catch (error) {
      console.error("Error downloading file:", error);
      res.status(500).send("Error downloading file");
    }
  }
}

export default FileUploadController;
