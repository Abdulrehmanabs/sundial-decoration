import Link from "next/link";
import sundialhome_1 from "../assets/Header-images/sundialhome-1.png";
import sundialhome_2 from "../assets/Header-images/sundialhome-2.png";
import sundialhome_3 from "../assets/Header-images/sundialhome-3.png";
import sundialhome_4 from "../assets/Header-images/sundialhome-4.png";
import sundialhome_5 from "../assets/Header-images/sundialhome-5.png";

const Header = () => {
  return (
    <div className=" text-sm font-semibold">
      <div className="max-w-screen-2xl mx-auto  py-5 sm:px-12 px-4">
        <div className="flex md:flex-row flex-col md:gap-0 gap-6">
          <Link href="/" className="md:w-6/12">
            <img
              className="rounded w-full h-full"
              src={sundialhome_1.src}
              alt="sundialhome_1"
            />
          </Link>
          <div className="md:ps-12 md:flex hidden flex-col w-6/12 ms-auto">
            <Link
              href="/"
              className="p-2 w-full rounded-lg overflow-auto border border-transparent hover:border-light_black hover:shadow-lg shadow-black "
            >
              <img
                className="rounded w-full "
                src={sundialhome_2.src}
                alt="sundialhome_2"
              />
              <p className="mt-2 ">Shop Accent Tables</p>
            </Link>
            <Link
              href="/"
              className="p-2 mt-4 w-full rounded-lg overflow-auto border border-transparent hover:border-light_black hover:shadow-lg shadow-black "
            >
              <img
                className="rounded w-full"
                src={sundialhome_3.src}
                alt="sundialhome_3"
              />
              <p className="mt-2 ">Shop Throw Pillows</p>
            </Link>
          </div>
        </div>
        {/* grid bottom */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-4">
          <Link
            href="/"
            className="p-2 min-w-80% overflow-auto rounded-lg hover:shadow-lg shadow-black "
          >
            <img
              className="rounded w-full "
              src={sundialhome_2.src}
              alt="sundialhome_2"
            />
            <p className="mt-2 ">Most Visited</p>
          </Link>
          <Link
            href="/"
            className="p-2 min-w-80% overflow-auto rounded-lg hover:shadow-lg shadow-black "
          >
            <img
              className="rounded w-full "
              src={sundialhome_4.src}
              alt="sundialhome_2"
            />
            <p className="mt-2 ">Shop Area Rugs</p>
          </Link>
          <Link
            href="/"
            className="p-2 min-w-80% overflow-auto  rounded-lg hover:shadow-lg shadow-black "
          >
            <img
              className="rounded w-full"
              src={sundialhome_5.src}
              alt="sundialhome_3"
            />
            <p className="mt-2 ">Shop Decor</p>
          </Link>
        </div>

        {/* scroll */}
        <div className="md:hidden flex mt-4">
          <Link
            href="/"
            className="p-2 overflow-auto rounded-lg border border-transparent hover:border-light_black hover:shadow-lg shadow-black "
          >
            <img
              className="rounded w-full "
              src={sundialhome_2.src}
              alt="sundialhome_2"
            />
            <p className="mt-2 ">Shop Accent Tables</p>
          </Link>
          <Link
            href="/"
            className="p-2 overflow-auto rounded-lg border border-transparent hover:border-light_black hover:shadow-lg shadow-black "
          >
            <img
              className="rounded w-full"
              src={sundialhome_3.src}
              alt="sundialhome_3"
            />
            <p className="mt-2 ">Shop Throw Pillows</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
