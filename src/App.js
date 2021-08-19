import Header from './components/Header';
import Video from './components/Video';
import video from './data/videos.json';
import Bio from './components/Bio';
import Comment from './components/Comment';
import './App.scss';

function App() {

  return (
    <>
    <Header />
    <Video video={video[0]} />
    <Bio />
    <Comment />
   </>
    
  );
}

export default App;
