import "../UploadPage/UploadPage.scss";
import uploadVideo from "../assets/Images/Upload-video-preview.jpg";

export default function UploadPage() {
  return (
    <main className="upload">
      <h1 className="upload__header">Upload Video</h1>
      <div className="upload__container">
        <h3 className="upload__subheader">VIDEO THUMBNAIL</h3>
        <img
          className="upload__img"
          src={uploadVideo}
          alt="blue cycle handle"
        />
        <div>
          <form className="upload__form">
            <div>
              <h3 className="upload__form__title">TITLE YOUR VIDEO</h3>
              <textarea
                className="upload__form__titlebox"
                placeholder="Add a title to your video"
              />
            </div>
            <div>
              <h3 className="upload__form__description">
                ADD A VIDEO DESCRIPTION
              </h3>
              <textarea
                className="upload__form__descriptionbox"
                placeholder="Add a description of your video"
              />
            </div>
            <div className="upload__button">
              <input
                type="submit"
                className="upload__button__publish"
                value="PUBLISH"
              />
              <input
                type="submit"
                className="upload__button__cancel"
                value="CANCEL"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
