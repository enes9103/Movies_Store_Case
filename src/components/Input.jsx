
const Input = ({ handleSearch }) => {
  return (
    <div className='flex justify-center'>
      <input
        className='h-12 pr-16 pl-7 rounded-full border border-[#f2f2f2] shadow-md transform transition-all ease-in-out placeholder:text-gray-500 w-full mx-5 mt-5 '
        placeholder='Search Movie'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;
