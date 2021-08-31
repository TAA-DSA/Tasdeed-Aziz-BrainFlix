import "../../components/Bio/Bio.scss";

export default function Bio({ text }) {
  return (
    <section className="bio__page">
      <p className="bio__paragraph">{text.description}</p>
    </section>
  );
}
