import userImg from "../../assets/Images/Mohan-muruge.jpg";
const number = 3;
const header = "JOIN THE CONVERSATION";

export default function Comment(props) {
  return (
    <section className="comment">
      <h2>{number} Comments</h2>
      <div className="comment__container">
        <div>
          <img className="user__img--muruge" src={userImg} alt="user" />
        </div>
        <div>
          <form className="comment-form">
            <h2 className="comment__header">{header}</h2>
            <textarea
              className="form__input"
              placeholder="Write a comment here"
            />
          </form>
          <div className="comment__button">
            <input type="submit" className="comment__submit" value="COMMENT" />
          </div>
        </div>
      </div>
    </section>
  );
}
