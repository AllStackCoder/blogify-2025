const express = require("express");
const multerUploader = require("../helper/multer");
const {
  getUserAccount,
  updateUserPhoto,
} = require("../controllers/accountController");

const router = express.Router();

// show user account
router.get("/:id", getUserAccount);

// update user photo
router.post(
  "/:id/update-user-photo",
  multerUploader().single("image"),
  updateUserPhoto
);

module.exports = router;
