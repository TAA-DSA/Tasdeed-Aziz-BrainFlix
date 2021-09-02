const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const videosFilePath = "./data/videoComment.json";

const getVideos = () => {
  const fileContent = fs.readFileSync(videosFilePath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};

//Get comments with id
router.get("/:id", (_req, res) => {
  try {
    const videos = getVideos();
    return res.status(200).json(
      videos.find((vid) => {
        return vid.id === _req.params.id;
      })
    );
  } catch (err) {
    return res.status(500).json({ error: "Invalid file request." });
  }
});

router.post("/:id", (req, res) => {
  console.log("Request body object:", req.body);

  const newComments = {
    id: uuidv4(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.descrition,
    views: req.body.views,
    likes: req.body.likes,
    duration: req.body.duration,
    timestamp: 1545162149000,
    comments: [
      {
        name: req.body.name,
        comment: req.body.comment,
        id: uuidv4(),
        likes: req.body.likes,
        timestamp: req.body.timestamp,
      },
      {
        name: req.body.name,
        comment: req.body.comment,
        id: uuidv4(),
        likes: req.body.likes,
        timestamp: req.body.timestamp,
      },
      {
        name: req.body.name,
        comment: req.body.comment,
        id: uuidv4(),
        likes: req.body.likes,
        timestamp: req.body.timestamp,
      },
    ],
  };

  const video = getVideos();
  video.push(newComments);

  fs.writeFileSync(videosFilePath, JSON.stringify(video));

  return res.status(201).json(newComments);
});

module.exports = router;
