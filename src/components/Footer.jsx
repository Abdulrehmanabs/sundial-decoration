import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" py-10 ">
      <div className="max-w-screen-2xl mx-auto sm:px-12 px-4 grid sm:grid-cols-3 gap-6 mb-4">
        <div>
          <h2 className="text-xl font-bold">Join Us</h2>
          <p className="hover:underline ">
            <Link href="/">Sell On Sundial</Link>
          </p>
          <p className="hover:underline ">
            <Link href="/">Create an account</Link>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Customer Service</h2>
          <p className="hover:underline ">
            <Link href="/">My Orders</Link>
          </p>
          <p className="hover:underline ">
            <Link href="/">Return Policy</Link>
          </p>
          <p className="hover:underline ">
            <Link href="/">Report a bug</Link>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <button className="min-w-[180px] border border-light_black rounded-full my-3 p-3">
            Call Us
          </button>
          <p className=" text-sm font-bold">Quick Service (All times PST)</p>
          <p className=" my-2">Mon - Fri: 10am - 5pm</p>
          <p>Sat & Sun: Closed</p>
        </div>
      </div>
      <div className="border">
        <div className="max-w-screen-2xl mx-auto sm:px-12 px-4 py-6 ">
          <div>
            <Link href="/" className="underline hover:no-underline">
              Privacy-Policy
            </Link>{" "}
            |{" "}
            <Link href="/" className="underline hover:no-underline">
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link href="/" className="underline hover:no-underline">
              {" "}
              Disclaimer
            </Link>{" "}
            |{" "}
            <Link href="/" className="underline hover:no-underline">
              {" "}
              Cookie Policy
            </Link>{" "}
            |{" "}
            <Link href="/" className="underline hover:no-underline">
              {" "}
              Blogs
            </Link>
          </div>
          <div>© 2020 - 2023 by Sundial Home Products LLC</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
