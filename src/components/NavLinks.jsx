import Link from "next/link";

const NavLinks = () => {
  const links = [
    "Explore",
    "Rugs",
    "Lighting",
    "Decor & Pillows",
    "Renovation",
    "Outdoor",
  ];
  return (
    <div className=" font-semibold border-b-1 border-gray-400 shadow-lg hidden md:block">
      <div className="max-w-screen-2xl mx-auto flex justify-center p-1">
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              href="/"
              className="hidden md:inline-block px-2 py-1 rounded-full hover:bg-gray-50 hover:underline"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
