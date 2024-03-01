const Contact = () => {
  return (
    <div className="pb-72">
      <h1 className="font-bold text-3xl p-4 m-4">Contact us page</h1>
      <form className=" ml-48">
        <input
          type="text"
          placeholder="Enter your Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Enter your Email"
          className="border border-black p-2 m-2"
        />
        <input
          type="number"
          placeholder="Enter your number"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-100" disabled>
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
