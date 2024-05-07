import Card from "./Card";

const Living_Room = () => {
  const abc = [
    {
      img_uri: "",
      title: "",
      disc: "",
    },
    {
      img_uri: "",
      title: "",
      disc: "",
    },
    {
      img_uri: "",
      title: "Coffee Tables",
      disc: "Shop Now",
    },
    {
      img_uri: "",
      title: "",
      disc: "",
    },
  ];
  return (
    <div>
      <h2 className="text-center font-bold text-lg">Living Room Must Haves</h2>
      {abc.map((item, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default Living_Room;
