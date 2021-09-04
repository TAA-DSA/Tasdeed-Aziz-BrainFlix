const express = require("express");
const router = express.Router();
const fs = require("fs");
const { title } = require("process");
const { v4: uuidv4 } = require("uuid");

const videosFilePath = "./data/videos.json";

const getVideos = () => {
  const fileContent = fs.readFileSync(videosFilePath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};

// GET all videos endpoint

router.get("/", (_req, res) => {
  try {
    const videos = getVideos();
    return res.status(200).json(videos);
  } catch (err) {
    return res.status(500).json({ error: "File invalid." });
  }
});

router.post("/", (req, res) => {
  console.log("Request body object:", req.body);

  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "DevTube",
    image: "http://localhost:8000/images/Mohan-muruge.jpg",
  };

  const video = getVideos();
  video.push(newVideo);

  fs.writeFileSync(videosFilePath, JSON.stringify(video));

  return res.status(201).json(newVideo);
});
//export the router for use in index.js

module.exports = router;
