import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./components/Header/header.scss";
import Video from "./components/Video/Video";
import "./components/Video/Video.scss";
import videoData from "./data/video-details.json";
import Bio from "./components/Bio/Bio";
import "./components/Bio/Bio.scss";
import SideVideos from "./components/SideVideos/SideVideos";
import "./components/SideVideos/SideVideos.scss";
import Comment from "./components/Comment/Comment";
import "./components/Comment/Comment.scss";
import Commentlst from "./components/CommentList/CommentList";
import "./components/CommentList/CommentList.scss";

class App extends Component {
  state = {
    videos: videoData,
    selectedVideo: videoData[0],
  };

  changeVideo = (id) => {
    const newVideo = this.state.videos.find((thumbnail) => thumbnail.id === id);

    this.setState({
      selectedVideo: newVideo,
    });
  };

  changeDate = (timestamp) => {
    const date = new Date(timestamp);
    const dateFormat =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    return dateFormat;
  };

  render() {
    return (
      <>
        <Header />
        <Video video={this.state.selectedVideo} date={this.changeDate} />
        <Bio text={this.state.selectedVideo} />
        <Comment />
        <Commentlst comment={this.state.selectedVideo} date={this.changeDate} />
        <SideVideos
          videoList={this.state.videos}
          handleClick={this.changeVideo}
        />
      </>
    );
  }
}

export default App;
