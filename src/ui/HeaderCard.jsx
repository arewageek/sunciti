export const HeaderCard = ({ icon, title, desc }) => {
    return (
        <div className='w-full lg:w-1/3 rounded-3xl bg-gray-50 p-5 shadow-xl'>
            <div className='relative'>
                <div className='text-[40pt] flex justify-center items-center pb-10 pt-5'>
                    <div className='text-orange-500'>
                        { icon }
                    </div>
                </div>
                
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-black/80 uppercase'>
                        { title }
                    </h2>
                </div>

                <div className='text-center mt-5 px-4 lg:px-10 text-gray-700 text-[10pt] leading-7'>
                    <p>
                        { desc }
                    </p>
                </div>
            </div>
        </div>
    )
}
