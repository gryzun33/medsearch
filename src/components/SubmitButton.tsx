const SubmitButton = ({ children }: { children: string }) => {
  return (
    <button
      type="submit"
      className="block w-full md:max-w-2xs mx-auto mt-3 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-hidden focus:bg-green-400  cursor-pointer"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
