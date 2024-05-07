import Card from "./Card";
import Coffee from "../assets/living-room-images/coffee-tables.png";
import console from "../assets/living-room-images/console-table.png";
import accent from "../assets/living-room-images/accent-chair.png";
import sectionals from "../assets/living-room-images/sectionals.png";

const Living_Room = () => {
  const values = [
    {
      img_uri: Coffee.src,
      title: "Coffee Tables",
      disc: "Shop Now",
    },
    {
      img_uri: sectionals.src,
      title: "Sectionals",
      disc: "Shop Now",
    },
    {
      img_uri: console.src,
      title: "Console Tables",
      disc: "Shop Now",
    },
    {
      img_uri: accent.src,
      title: "Accent Chairs",
      disc: "Shop Now",
    },
  ];
  return (
    <div className=" py-10">
      <h2 className="text-center font-bold text-2xl">Living Room Must Haves</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto sm:px-12 px-4">
        {values.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Living_Room;
