export default function Main(props: any) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}
