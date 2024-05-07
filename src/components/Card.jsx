import Link from "next/link";
import sundialhome_2 from "../assets/Header-images/sundialhome-2.png";

const Card = ({}) => {
  return (
    <div className="flex">
      <Link
        href="/"
        className="p-2 overflow-auto rounded-lg border border-transparent hover:border-light_black hover:shadow-lg shadow-black "
      >
        <img
          className="rounded w-full w-full"
          src={sundialhome_2.src}
          alt="sundialhome_2"
        />
        <h2>Console Tables</h2>
        <p className="mt-2 ">Shop Accent Tables</p>
      </Link>
    </div>
  );
};

export default Card;
