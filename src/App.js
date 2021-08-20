import React, {Component} from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import videoData from './data/video-details.json';
import Bio from './components/Bio/Bio';
import SideVideos from './components/SideVideos/SideVideos';
import Comment from './components/Comment/Comment';
import Commentlst from './components/CommentList/CommentList';
import './App.scss';

class App extends Component{

  state = {
    videos: videoData,
    selectedVideo: videoData[0]
  }
   
    
  render(){
    console.log(this.state);
    return (
      <>
      <Header />
      <Video video={this.state.selectedVideo} />
      <Bio text={this.state.selectedVideo}/>
      <Comment />
      <Commentlst comment={this.state.selectedVideo} />
      <SideVideos videoList = {this.state.videos[2]}/>
     </>
      
    );
  }
  
}

export default App;
