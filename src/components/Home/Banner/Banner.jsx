import { LOGO_WHITE } from '../../../utils/constants'

const Banner = () => {
  return (
    <div className='text-white -mt-80'>
        <div className='flex flex-col space-y-8 justify-center items-center'>
            <img className='w-72' src={LOGO_WHITE} />
            <h1 className='text-[40px]'>Discover the best food & drinks in Delhi NCR</h1>
            {/* <input className='py-4 px-96 rounded-md'/> */}
            <div className="relative w-full max-w-7xl mx-auto mt-10">       
                <div className="relative">
                    <div className="absolute top-0 left-0 mt-[17px] ml-3">
                        <i className="fa fa-search text-gray-400"></i>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for restaurants, cuisines, or dishes"
                        className="w-full py-4 pl-10 pr-4 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary focus:border-opacity-50"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner