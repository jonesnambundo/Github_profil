import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/git_hub.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center mb-7">
      <FaGithub className="text-3xl sm:text-4xl md:text-5xl mr-2 text-white" />
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-[100%] tracking-[0] flex items-center gap-2">
        Perfil
        <span>
          <img
            src={Logo}
            alt="Logo"
            className="w-[100px] sm:w-[130px] md:w-[160px] h-auto object-contain"
          />
        </span>
      </h1>
    </div>
  );
};

export default Header;
