// import admin from 'firebase-admin'


// const downloadFile = async (req, res) => {
//   const fileName = req.params.fileName;
//   const bucket = admin.storage().bucket();
//   const file = bucket.file(fileName);

//   try {
//     const [fileExists] = await file.exists();
//     if (!fileExists) {
//       return res.status(404).send("File not found");
//     }

//     const downloadStream = file.createReadStream();
//     downloadStream.pipe(res);
//   } catch (error) {
//     console.error("Error downloading file:", error);
//     res.status(500).send("Error downloading file");
//   }
// };

// export default downloadFile;
