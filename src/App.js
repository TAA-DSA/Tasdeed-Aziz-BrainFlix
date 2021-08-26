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
  state = {
    selectedVideo: null,
    videos: [],
  };

  getVideoDetails = (videoID) => {
    axios
      .get(`${API_URL}/${videoID}?api_key=${API_KEY}`)
      .then((videoDetails) => {
        console.log("singleVideo:", videoDetails.data);

        this.setState({
          selectedVideo: videoDetails.data,
        });
      });
  };

  getAllVideos = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}`).then((videoResult) => {
      console.log("allVideos:", videoResult.data);

      this.setState({
        videos: videoResult.data,
      });

      const firstVideo = videoResult.data[0].id;
      console.log("first video[id]:", firstVideo);

      this.getVideoDetails(firstVideo);
    });
  };

  componentDidMount() {
    this.getAllVideos();
  }

  //componentDidUpdate

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
              handleClick={this.changeVideo}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
