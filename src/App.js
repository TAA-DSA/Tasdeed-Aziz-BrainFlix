import Header from './components/Header';
import Video from './components/Video';
import video from './data/videos.json';
// import Bio from './components/bio';
import './App.scss';

function App() {

  return (
    <>
    <Header />
    <Video video={video[0]} />
   </>
    
  );
}

export default App;
