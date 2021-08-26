import { Link } from "react-router-dom";
import "../SideVideos/SideVideos.scss";

export default function SideVideos({ videoList }) {
  //console.log(props)
  return (
    <section className="sidevideo__list">
      <h4 className="sidevideo--header">Next Video</h4>
      {videoList.map((thumbnail) => {
        return (
          <div key={thumbnail.id} className="sidevideo">
            <Link to={`/video/${thumbnail.id}`} />
            <div className="sidevideo__data">
              <img
                className="video__thumbnail"
                src={thumbnail.image}
                alt="side videos"
              ></img>
              <div className="video__details">
                <ul>
                  <li className="sidevideo--title">{thumbnail.title}</li>
                  <li className="sidevideo--channel">{thumbnail.channel}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
