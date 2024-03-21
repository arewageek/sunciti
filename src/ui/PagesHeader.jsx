import { FaCaretDown } from "react-icons/fa";

export const PagesHeader = ({
  title,
  image = "./assets/images/solar-technicians.jpg",
}) => {
  return (
    <div
      className="w-full uppercase"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" py-20 px-4 bg-gray-800/70 backdrop-blur-sm min-h-[200px] justify-center items-center">
        <div className="w-fit mx-auto py-5 text-white text-center text-3xl font-bold flex flex-col items-center justify-center space-y-5">
          <h1 className="">{title}</h1>
          <div className="animate-bounce">
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
};
