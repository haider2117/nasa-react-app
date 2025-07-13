export default function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img
        src={data.hdurl || data.url}
        alt={data.title || "Astronomy Picture of the Day"}
        className="bgImage"
      />
    </div>
  );
}
