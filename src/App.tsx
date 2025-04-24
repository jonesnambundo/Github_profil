import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import CardProfil from "./components/CardProfil";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setIsLoading(true);
    try {
      setShowCard(false);
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUserData(response.data);
      setUserName("");
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setUserData(null);
      setIsLoading(false);
    }
    setShowCard(true);
  }

  return (
    <div className="relative w-full min-h-screen flex justify-center overflow-hidden px-4 sm:px-6 md:px-10">
      {/* Bolha da esquerda */}
      <div className="absolute opacity-30 blur-[100px] rounded-full z-0 bg-[#005CFF] w-[674px] h-[674px] top-[198px] left-[-415px]" />
      {/* Bolha da direita */}
      <div className="absolute opacity-30 blur-[100px] rounded-full z-0 bg-[#005CFF] w-[888px] h-[888px] top-[-268px] left-[806px]" />
      {/* Painel principal */}
      <div className="relative z-10 w-full animate-rotate-border max-w-[1156px] min-h-[537px] bg-black flex flex-col items-center p-6 sm:p-8 md:p-9 shadow-xl backdrop-blur-md mt-[137px] mb-[137px]">
        <Header />

        <SearchBar
          userName={userName}
          setUserName={setUserName}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {showCard && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-full max-w-2xl bg-gray-200 justify-center rounded-xl p-6 px-8 md:p-10 mb-8 shadow-md animate-fade-in-up duration-500"
          >
            {userData ? (
              <CardProfil userData={userData} />
            ) : (
              <p className="text-sm sm:text-base md:text-lg text-red-600 font-light">
                Nenhum perfil foi encontrado com esse nome de usuário. 
                Tente novamente
              </p>
            )}
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default App;
