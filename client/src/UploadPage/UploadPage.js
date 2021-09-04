import React, { Component } from "react";
import "../UploadPage/UploadPage.scss";
import uploadVideo from "../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import { NEW_URL } from "../Utils";
//import { Redirect } from "react-router-dom";
//import axios from "axios";

class UploadPage extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (!this.state.title || !this.state.description) {
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${NEW_URL}`, this.state).then((addVideo) => {
      console.log(addVideo);
      console.log("id", addVideo.data.id);
      axios
        .post(`${NEW_URL}/${addVideo.data.id}/comments`, this.state)
        .then((addVideoComments) => {
          console.log(addVideoComments);
          this.setState({
            title: "",
            description: "",
          });
        });

      if (!this.isFormValid()) {
        // <Redirect to="/" />;
        alert("Upload successfully");
      } else {
        alert("Field cannot be blank, please enter a title and description");
      }
    });
  };

  render() {
    return (
      <main className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <div className="upload__container">
          <h3 className="upload__subheader">VIDEO THUMBNAIL</h3>
          <div className="upload__dataconatainer">
            <img
              className="upload__img"
              src={uploadVideo}
              alt="blue cycle handle"
            />
            <div>
              <form onSubmit={this.handleSubmit} className="upload__form">
                <div>
                  <h3 className="upload__form__title">TITLE YOUR VIDEO</h3>
                  <textarea
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    className="upload__form__titlebox"
                    placeholder="Add a title to your video"
                  />
                </div>
                <div>
                  <h3 className="upload__form__description">
                    ADD A VIDEO DESCRIPTION
                  </h3>
                  <textarea
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
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
        </div>
      </main>
    );
  }
}

export default UploadPage;
