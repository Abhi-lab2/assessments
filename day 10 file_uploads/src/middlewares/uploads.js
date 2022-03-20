const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // for error - new Error("file missing") instead of null
    callback(
      null,
      path.join(__dirname, "../uploads") // For multiple we select __dirname
      //location to store the images..
    );
  },
  filename: function (req, file, callback) {
    console.log({ file });
    const uniquePrefix = Date.now();    //sortde yb teh dte
    callback(null, uniquePrefix + "-" + file.originalname); //from dco
  },
});

// filtr with jpeg or png or jpg
function fileFilter(req, file, callback) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
    callback(null, true);
  } else {
    callback(new Error("Incorrect mime type"), false);
  }
}

// from npm multer docs
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = upload;
