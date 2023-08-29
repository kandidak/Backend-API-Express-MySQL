const { Sequelize, UUID, UUIDV4 } = require("sequelize");
const db = require("../config/Database");

class FileModel {
  static insertFile(fileName, downloadUrl) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO files (file_name, download_url) VALUES (?, ?)";
      db.query(sql, [fileName, downloadUrl], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  static getFileDownloadUrl(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT download_url FROM files WHERE id = ?";
      db.query(sql, [id], (error, results) => {
        if (error) {
          reject(error);
        } else if (results.length === 0) {
          resolve(null);
        } else {
          resolve(results[0].download_url);
        }
      });
    });
  }
}

module.exports = FileModel;