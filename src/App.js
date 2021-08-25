import React, { Component } from "react";
import Video from "./components/Video/Video";
import videoData from "./data/video-details.json";
import Bio from "./components/Bio/Bio";
import SideVideos from "./components/SideVideos/SideVideos";
import Comment from "./components/Comment/Comment";
import Commentlst from "./components/CommentList/CommentList";

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
