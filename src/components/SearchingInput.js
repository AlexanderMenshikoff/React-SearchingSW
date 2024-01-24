const SearchingInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500  dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="w-[25vw] block p-4 ps-10 text-sm outline-none text-gray-300  border border-gray-500 rounded-[25px] bg-black group focus:ring-gray-500 focus:border-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 search-cancel:fill-green-400 search-cancel:h-4 search-cancel:w-4 search-cancel:appearance-none   "
            placeholder="Введите имя персонажа по-английски"
            required
            value={props.inputValue}
            onChange={(e) => {
              props.setInputValue(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchingInput;
