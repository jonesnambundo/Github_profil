type UserData = {
  avatar_url: string;
  name?: string;
  bio?: string;
};

type CardProfilProps = {
  userData: UserData;
};

const CardProfil = ({ userData }: CardProfilProps) => {
  return (
    <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-0 sm:gap-4 md:gap-7">
      <img
        src={userData.avatar_url}
        alt="Profile photo"
        className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] border-2 border-[#005CFF] rounded-full object-cover"
      />

      <div className="text-black text-center sm:text-left mt-4 md:mt-0">
        <h3 className="text-[#005CFF] text-xl font-bold mb-4 leading-none truncate">
          {userData.name ? userData.name : "Sem nome"}
        </h3>
        <p className="text-black font-light text-sm md:text-base leading-snug line-clamp-4">
          {userData.bio ? userData.bio : "Sem bio"}
        </p>
      </div>
    </div>
  );
};

export default CardProfil;
