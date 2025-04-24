import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="relative w-full min-h-screen flex justify-center overflow-hidden px-4 sm:px-6 md:px-10">
      {/* Bolha da esquerda */}
      <div className="absolute opacity-30 blur-[100px] rounded-full z-0 bg-[#005CFF] w-[674px] h-[674px] top-[198px] left-[-415px]" />
      {/* Bolha da direita */}
      <div className="absolute opacity-30 blur-[100px] rounded-full z-0 bg-[#005CFF] w-[888px] h-[888px] top-[-268px] left-[806px]" />
      {/* Painel principal */}
      <div className="relative z-10 w-full animate-rotate-border max-w-[1156px] min-h-[537px] bg-black flex flex-col items-center p-6 sm:p-8 md:p-9 shadow-xl backdrop-blur-md mt-[137px] mb-[137px]">
        <Header />
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
