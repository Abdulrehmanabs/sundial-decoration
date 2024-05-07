import Link from "next/link";

const Headline = () => {
  return (
    <div className="bg-light_black text-white text-sm font-semibold">
      <div className="max-w-screen-2xl mx-auto flex md:justify-between justify-center py-2 sm:px-12 px-4">
        <Link href="/" className="hidden md:inline-block">
          Explore Furniture You{"'"}ll Love
          <span>
            <svg
              className="pl-BaseIcon SitewideBanner-ctaIcon inline-block w-6 "
              focusable="false"
              fill="#ffffff"
              viewBox="0 0 28 28"
              data-enzyme-id="SitewideBannerIcon"
              aria-hidden="true"
              data-hb-id="pl-icon"
            >
              <path d="M21.22 14.826a.79.79 0 00.2-.31.842.842 0 00.07-.35v-.03a.842.842 0 00-.07-.35.79.79 0 00-.2-.31l-3.17-3.18a1 1 0 00-1.42 1.41l1.46 1.43H7a1 1 0 000 2h11.09l-1.47 1.48a1 1 0 101.42 1.41l3.17-3.18.01-.02z"></path>
            </svg>
          </span>
        </Link>
        <Link href="/">
          <span>Free Shipping Over $49</span>
        </Link>
      </div>
    </div>
  );
};

export default Headline;
