import { Link } from "react-router-dom";
import "../SideVideos/SideVideos.scss";

export default function SideVideos({ videoList }) {
  return (
    <section className="sidevideo__list">
      <h4 className="sidevideo--header">Next Video</h4>

      {videoList.map((video) => {
        return (
          <div key={video.id} className="sidevideo">
            <Link className="Link" to={`/videos/${video.id}`}>
              <div className="sidevideo__data">
                <img
                  className="video__thumbnail"
                  src={video.image}
                  alt="side videos"
                ></img>
                <div className="video__details">
                  <ul>
                    <li className="sidevideo--title">{video.title}</li>
                    <li className="sidevideo--channel">{video.channel}</li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
