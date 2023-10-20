import { HOMEPAGEBG } from "../../utils/constants"
import Banner from "./Banner/Banner"
import Header from "./Header/Header"
import QuickLinks from "./QuickLinks/QuickLinks"


const Home = () => {
  return (
    <div className="relative">
        <div className="absolute z-10">
            <div className="inset-0 flex justify-center items-center p-32">
                <Header />  
            </div>
            <div className="flex justify-center items-center p-36">
                <Banner />
            </div>
        </div>
        <div className="bg-gray-200 h-[calc(100vh-30rem)] min-h-[30rem] max-h-[57rem] w-full relative overflow-hidden">
            <img
                className="absolute top-0 left-0 h-full w-full object-cover transform scale-110 opacity-100 transition-all duration-1400 ease-in"
                src={HOMEPAGEBG}
                alt=""
            />
        </div>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 ml-12">
            <QuickLinks />
        </div>
    </div>
  )
}

export default Home