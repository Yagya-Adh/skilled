const SearchBox = () => {
  return (
    <div className="flex relative py-4">
      <input
        type="text"
        placeholder="Enter cource"
        className=" text-xl rounded-l-xl py-2 ps-12"
      />
      <button className=" py-2 px-3 bg-skilled-green-30 text-xl text-black font-bold hover:bg-black hover:text-white rounded-r-xl">
        Search
      </button>
      <div className="absolute  top-4 left-4">{/* icon */}</div>
    </div>
  );
};

export default SearchBox;
