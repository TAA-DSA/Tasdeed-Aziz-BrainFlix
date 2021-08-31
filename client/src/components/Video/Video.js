import "../../components/Video/Video.scss";
import likes from "../../assets/Logo/Icon-likes.svg";
import views from "../../assets/Logo/Icon-views.svg";
//import { Link } from "react-router-dom";

export default function Video({ video, date }) {
  return (
    <section className="main__video">
      <video className="video__bmx" poster={video.image} controls></video>
      <div className="hero__container">
        <h1 className="video__title">{video.title}</h1>
        <div className="channel__section">
          <div className="channel__detail">
            <div>
              <h2 className="video__channel">By {video.channel}</h2>
            </div>
            <div>
              <p className="date">{date(video.timestamp)}</p>
            </div>
          </div>
          <div className="icon__section">
            <img className="views__icon" src={views} alt="eye" />
            <p className="number__views">{video.views}</p>
            <img className="icon__like" src={likes} alt="heart" />
            <p className="likes__given">{video.likes}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
