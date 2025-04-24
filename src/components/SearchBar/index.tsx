const SearchBar = () => { 
    return (
      <form className="w-full px-4 sm:px-8 max-w-xl mb-5 relative">
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          className="w-full bg-gray-200 px-4 pr-14 h-9 sm:h-12 md:h-12 text-xs sm:text-sm md:text-base rounded-xl outline-none"
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 md:right-8 bg-blue-600 h-8 sm:h-11 md:h-11 w-10 sm:w-12 md:w-14 flex items-center justify-center rounded-xl text-white cursor-pointer hover:bg-blue-700"
        >
        </button>
      </form>
    );
  };
  
  export default SearchBar;
  