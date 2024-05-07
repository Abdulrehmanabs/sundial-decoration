import Card from "./Card";
import chairs from "../assets/Dining-Essentials/dining-chairs.png";
import tables from "../assets/Dining-Essentials/dining-tables.png";

const Dining_Essentials = () => {
  const values = [
    {
      img_uri: chairs.src,
      title: "Shop Dining Chairs",
    },
    {
      img_uri: tables.src,
      title: "Shop Dining Tables",
    },
  ];
  return (
    <div className=" py-10">
      <h2 className="text-center font-bold text-2xl">Dining Essentials</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-screen-2xl mx-auto sm:px-12 px-4">
        {values.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Dining_Essentials;
