export const Call2ActionsCard = ({ icon, note }) => {
  return (
    <div className="w-full lg:w-1/4 flex justify-center items-center cursor-pointer group px-2 py-2">
      <div className="w-full h-full rounded-3xl shadow-lg group-hover:shadow-2xl group-hover:bg-gray-700 transition-all duration-300 px-4 lg:px-[20pt] py-5 group-hover:scale-95 md:group-hover:scale-[85%] border-2 border-gray-100 group-hover:border-gray-600">
        <div className="my-3 text-gray-400 text-[60pt] group-hover:text-gray-300 transition duration-300">
          {icon}
        </div>

        <p className="font-bold text-lg md:text-xl text-gray-800 group-hover:text-gray-50">
          {note}
        </p>
      </div>
    </div>
  );
};
