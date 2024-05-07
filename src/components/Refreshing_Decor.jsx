import Card from "./Card";
import cozy from "../assets/Refreshing-images/cozy.png";
import picture from "../assets/Refreshing-images/picture.png";
import reflections from "../assets/Refreshing-images/rreflections.png";
import vases from "../assets/Refreshing-images/vases.png";
const Refreshing_Decor = () => {
  const values = [
    {
      img_uri: vases.src,
      title: "Vases to Adore",
      disc: "Shop Vases",
    },
    {
      img_uri: reflections.src,
      title: " New Reflections",
      disc: "Shop Wall Mirrors",
    },
    {
      img_uri: picture.src,
      title: "Console Tables",
      disc: "Shop Now",
    },
    {
      img_uri: cozy.src,
      title: "Accent Chairs",
      disc: "Shop Now",
    },
  ];
  return (
    <div className=" py-10">
      <h2 className="text-center font-bold text-2xl">Refreshing Decor Edits</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto sm:px-12 px-4">
        {values.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Refreshing_Decor;
