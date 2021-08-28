import React, { Component } from "react";
import Video from "./components/Video/Video";
import Bio from "./components/Bio/Bio";
import SideVideos from "./components/SideVideos/SideVideos";
import Comment from "./components/Comment/Comment";
import Commentlst from "./components/CommentList/CommentList";
import { API_URL, API_KEY, changeDate } from "./Utils";
import "./App.scss";
import axios from "axios";

class App extends Component {
  //creating the states
  state = {
    selectedVideo: null,
    videos: [],
  };

  //Function to get the video and comment with id parameter

  getVideoDetails = (videoID) => {
    axios
      .get(`${API_URL}/${videoID}?api_key=${API_KEY}`)
      .then((videoDetails) => {
        this.setState({
          selectedVideo: videoDetails.data,
        });
      });
  };

  //Fucntion to get all video data without the comment {sideVideoList}
  //then pass the id to getVideo function to get the
  //details and display on main page.

  getAllVideos = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}`).then((videoResult) => {
      this.setState({
        videos: videoResult.data,
      });

      const firstVideo = this.state.videos[0].id;

      const currentvideoId = this.props.match.params.videoId;

      // Condition to show the video thats been selected on main page
      // and stay on the page until the home button is pressed

      const showVideoId = currentvideoId ? currentvideoId : firstVideo;

      this.getVideoDetails(showVideoId);
    });
  };

  //Component mount function
  componentDidMount() {
    this.getAllVideos();
  }

  //Component update function

  componentDidUpdate(previousID) {
    if (this.props.match.params.videoId !== previousID.match.params.videoId) {
      this.getVideoDetails(this.props.match.params.videoId);
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
      <>
        <Video video={this.state.selectedVideo} date={changeDate} />
        <main>
          <div className="left">
            <Bio text={this.state.selectedVideo} />
            <Comment />
            <Commentlst comment={this.state.selectedVideo} date={changeDate} />
          </div>
          <div className="right">
            <SideVideos videoList={filteredVideo} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
