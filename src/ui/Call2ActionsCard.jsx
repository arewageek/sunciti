export const Call2ActionsCard = ({ icon, note }) => {
    return (
        <div className="w-full lg:w-1/4 flex justify-center items-center cursor-pointer group">
            <div className="w-full shadow-lg group-hover:shadow-2xl group-hover:bg-green-700 transition-all duration-300 px-4 lg:px-[20pt] py-5 group-hover:scale-[80%]">
                <div className="my-3 text-green-400 text-[60pt] group-hover:text-green-300 transition duration-300">
                    { icon }
                </div>

                <p className="font-bold text-lg md:text-xl text-green-800 group-hover:text-green-50">
                    { note }
                </p>
            </div>
        </div>
    )
}