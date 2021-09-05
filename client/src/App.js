import React, { Component } from "react";
import Video from "./components/Video/Video";
import Bio from "./components/Bio/Bio";
import SideVideos from "./components/SideVideos/SideVideos";
import Comment from "./components/Comment/Comment";
import Commentlst from "./components/CommentList/CommentList";
import { NEW_URL, changeDate } from "./Utils";
import "./App.scss";
import axios from "axios";

class App extends Component {
  //creating the empty states
  state = {
    selectedVideo: null,
    videos: [],
  };

  //Function to get the video and comments with id parameter

  getVideoDetails = (videoID) => {
    axios.get(`${NEW_URL}/${videoID}`).then((videoDetails) => {
      this.setState({
        selectedVideo: videoDetails.data,
      });
    });
  };

  //Function to get all video data without the comment {sideVideoList}
  //then pass the id to the getVideo function to get the
  //details and display it on main page when selected.

  getAllVideos = () => {
    axios.get(`${NEW_URL}`).then((videoResult) => {
      this.setState({
        videos: videoResult.data,
      });

      //default video id
      const firstVideo = this.state.videos[0].id;
      //console.log("firstVideo:", firstVideo);

      const currentvideoId = this.props.match.params.videoId;

      // Condition to show the video thats been selected on main page
      // and stay on the page

      const showVideoId = currentvideoId ? currentvideoId : firstVideo;

      this.getVideoDetails(showVideoId);
    });
  };

  // Component mount function

  componentDidMount() {
    this.getAllVideos();
  }

  //Component update function to update the page with
  //current selected video

  componentDidUpdate(previousProps) {
    const currentVideo = this.props.match.params.videoId;
    const previousVideo = previousProps.match.params.videoId;

    //console.log("current", currentVideo);
    //console.log("previous", previousVideo);

    if (currentVideo !== previousVideo) {
      this.getVideoDetails(currentVideo);
    }
  }

  render() {
    if (!this.state.selectedVideo) {
      return <p>Please wait, this page is loading...</p>;
    }

    //Filter out the selected video from side videolist

    const filteredVideo = this.state.selectedVideo
      ? this.state.videos.filter(
          (vid) => vid.id !== this.state.selectedVideo.id
        )
      : this.state.videos;

    return (
      <main>
        <div className="main">
          <div className="left">
            <Video video={this.state.selectedVideo} date={changeDate} />
            <Bio text={this.state.selectedVideo} />
            <Comment />
            <Commentlst comment={this.state.selectedVideo} date={changeDate} />
          </div>
          <div className="right">
            <SideVideos videoList={filteredVideo} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
