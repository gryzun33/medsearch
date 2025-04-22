const PharmaciesTableHeader = () => {
  return (
    <div className="flex w-full justify-between bg-gray-100 p-2 text-sm text-gray-700">
      <div className="width-[70%] md:w-5/12">Pharmacy</div>
      <div className="hidden md:block md:w-5/12">Address</div>
      <div className="width-[30%] md:w-2/12 text-end">Price</div>
    </div>
  );
};

export default PharmaciesTableHeader;
