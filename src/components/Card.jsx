import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className="flex text-center mt-4">
      <Link
        href="/"
        className="w-full p-1 pb-4 overflow-auto rounded-lg border border-transparent hover:border-light_black hover:shadow-lg shadow-black "
      >
        <img
          className="rounded w-full"
          src={data.img_uri}
          alt="sundialhome_2"
        />
        <h2 className="font-bold text-xl mt-3">{data?.title}</h2>
        <p className="my-2 ">{data?.disc}</p>
      </Link>
    </div>
  );
};

export default Card;
