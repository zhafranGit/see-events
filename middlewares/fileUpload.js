const errorHandler = require("../utils/error-handler");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

module.exports = {
  uploadLocal: (fieldName) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./public");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix+"."+
          (file.originalname).split(".")[(file.originalname).split(".").length-1] 
          ) 
        //cb(null, uniqueSuffix + "-" + file.originalname.split());
      },
    });

    const upload = multer({ storage }).single(fieldName); 

    return (req, res, next) => {
      upload(req, res, (err) => {
        if (err) {
          errorHandler(res, err);
        }
        next();
      });
    };
  },
  uploadCloud: (fieldName) => {
    const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: (req, file) => {
        return {
          folder: fieldName,
          resource_type: "raw",
          public_id: Date.now() + " - " + file.originalname,
        };
      },
    });

    const upload = multer({ storage }).single(fieldName);

    return (req, res, next) => {
      upload(req, res, (error) => {
        if (error) {
          errorHandler(res, error);
        }
        next();
      });
    };
  },
};
