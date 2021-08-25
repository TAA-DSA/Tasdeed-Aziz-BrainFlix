import "../SideVideos/SideVideos.scss";

export default function SideVideos(props) {
  //console.log(props)
  return (
    <section className="sidevideo__list">
      <h4 className="sidevideo--header">Next Video</h4>
      {props.videoList.map((thumbnail) => {
        if (thumbnail.title !== props.videoList[0].title) {
          return (
            <div
              key={thumbnail.id}
              className="sidevideo"
              onClick={() => props.handleClick(thumbnail.id)}
            >
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
        } else {
          return false;
        }
      })}
    </section>
  );
}
