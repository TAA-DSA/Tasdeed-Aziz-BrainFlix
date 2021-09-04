const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const videosFilePath = "./data/videoDetails.json";

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

  const newVideoDetail = {
    id: req.params.id,
    title: req.body.title,
    channel: "DevTube",
    image: "http://localhost:8000/images/Mohan-muruge.jpg",
    description: req.body.description,
    views: "29,984",
    likes: "25680",
    duration: "6:50",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000,
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 2,
        timestamp: 1544595784046,
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 3,
        timestamp: 1542262984046,
      },
    ],
  };

  const video = getVideos();
  video.push(newVideoDetail);

  fs.writeFileSync(videosFilePath, JSON.stringify(video));

  return res.status(201).json(newVideoDetail);
});

module.exports = router;
