const path = require('path');
const nanoid = require('nanoid');
const express = require('express');
const multer = require('multer');

const filedb = require('../filedb');
const config = require('../config');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }}
);

const upload = multer({storage});

router.get('/', async (req, res) => {
  const messages = await filedb.getMessages();
  res.send(messages);
});

router.post('/', upload.single('image') , async (req, res) => {
  const message = req.body;

  if(req.file){
    message.image = req.file.filename;
  }
  await filedb.addMessage(message);

  res.send(message);
});

module.exports = router;
