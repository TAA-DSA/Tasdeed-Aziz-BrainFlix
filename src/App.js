import Header from './components/Header';
import Video from './components/Video';
import video from './data/videos.json';
import Bio from './components/Bio';
import './App.scss';

function App() {

  return (
    <>
    <Header />
    <Video video={video[0]} />
    <Bio />
   </>
    
  );
}

export default App;
