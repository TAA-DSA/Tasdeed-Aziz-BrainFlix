import React, { Component } from "react";
import Video from "./components/Video/Video";
import Bio from "./components/Bio/Bio";
import SideVideos from "./components/SideVideos/SideVideos";
import Comment from "./components/Comment/Comment";
import Commentlst from "./components/CommentList/CommentList";
import { API_URL, API_KEY } from "./Utils";
import "./App.scss";
import axios from "axios";

class App extends Component {
  //declaring the states
  state = {
    selectedVideo: null,
    videos: [],
  };

  //Function to get the video and comment with id parameter

  getVideoDetails = (videoID) => {
    axios
      .get(`${API_URL}/${videoID}?api_key=${API_KEY}`)
      .then((videoDetails) => {
        console.log("singleVideo:", videoDetails.data);

        this.setState({
          selectedVideo: videoDetails.data,
        });
        console.log("selected", this.state.selectedVideo);
      });
  };

  //Fucntion to get all video data without the comment {sideVideoList}
  //then pass the id to getVideo function to get the
  //details and display on main page.

  getAllVideos = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}`).then((videoResult) => {
      console.log("allVideos:", videoResult.data);

      this.setState({
        videos: videoResult.data,
      });

      const firstVideo = this.state.videos[0].id;
      console.log("first video[id]:", firstVideo);

      const currentvideoId = this.props.match.params.videoId;
      console.log("current video", currentvideoId);

      //
      const showVideoId = currentvideoId ? currentvideoId : firstVideo;

      this.getVideoDetails(showVideoId);
    });
  };

  //Component mount function
  componentDidMount() {
    //this.getVideoDetails(this.state.videos[2].id);
    this.getAllVideos();
  }

  //Component update function
  componentDidUpdate(previousID) {
    if (this.props.match.params.videoId !== previousID.match.params.videoId) {
      this.getVideoDetails(this.props.match.params.videoId);
    }
  }

  // changeVideo = (id) => {
  //   const newVideo = this.state.videos.find((thumbnail) => thumbnail.id === id);

  //   this.setState({
  //     selectedVideo: newVideo,
  //     videos: videoResult.data.filter((vid) => vid.id !== newVideo.id),
  //   });
  // };

  changeDate = (timestamp) => {
    const date = new Date(timestamp);
    const dateFormat =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    return dateFormat;
  };

  render() {
    //const { videos } = this.state;
    //console.log(videos);
    if (!this.state.selectedVideo) {
      return <p>Please wait a second this page is loading...</p>;
    }
    console.log(this.state.selectedVideos);
    return (
      <>
        <Video video={this.state.selectedVideo} date={this.changeDate} />
        <main>
          <div className="left">
            <Bio text={this.state.selectedVideo} />
            <Comment />
            <Commentlst
              comment={this.state.selectedVideo}
              date={this.changeDate}
            />
          </div>
          <div className="right">
            <SideVideos
              videoList={this.state.videos}
              //handleClick={this.changeVideo}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
