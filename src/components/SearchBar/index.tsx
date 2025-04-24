import { FaSearch } from "react-icons/fa";

const SearchBar = ({ userName, setUserName, handleSubmit, isLoading }) => {
  return (
    <form
      className="w-full px-4 sm:px-8 max-w-xl mb-8 relative"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        className="w-full bg-gray-200 px-4 pr-14 h-9 sm:h-12 md:h-12 text-xs sm:text-sm md:text-base rounded-xl outline-none"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-4.5 sm:right-8.5 md:right-8.5 bg-blue-600 h-8 sm:h-11 md:h-11 w-10 sm:w-12 md:w-14 flex items-center justify-center rounded-xl text-white cursor-pointer hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
        ) : (
          <FaSearch size={24} />
        )}
      </button>
    </form>
  );
};

export default SearchBar;
