const Contact = () => {
  return (
    <div className=" py-10 border-y">
      <div className="max-w-screen-2xl mx-auto sm:px-12 px-4 text-center flex justify-center items-center flex-col md:flex-row md:justify-evenly">
        <p className="font-semibold ">
          Be the first to know about our daily sales!
        </p>
        <form action="" className="md:mt-0 mt-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border px-4 py-3 rounded-tl-lg rounded-bl-lg"
          />
          <button className="bg-light_black px-4 py-3 rounded-tr-lg rounded-br-lg text-white ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
