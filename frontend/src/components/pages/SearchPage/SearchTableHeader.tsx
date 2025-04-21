const SearchTableHeader = () => {
  return (
    <div className="flex w-full justify-between bg-gray-100 p-2 md:pl-0 text-sm text-gray-700">
      <div className="hidden md:block md:w-1/12"></div>
      <div className="width-[65%] md:w-5/12 ">Name</div>
      <div className="hidden md:block md:w-4/12">Form</div>
      <div className="width-[35%] md:w-2/12 text-end">Prices</div>
    </div>
  );
};

export default SearchTableHeader;
