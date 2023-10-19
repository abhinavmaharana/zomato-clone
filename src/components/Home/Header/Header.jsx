import DownloadApp from '../../../assets/downloadapp.svg'

const Header = () => {
  return (
    <div className="bg-transparent -mt-44">
        <div className="xontainer mx-auto">
            <div className="grid grid-cols-2 space-x-52 justify-between items-center text-primary">
                <div>
                    <div className="flex items-center space-x-2">
                        <img className="w-4" src={DownloadApp} />  
                        <h1>Get the app</h1>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-primary hover:underline">Investor Relations</a>
                    <a href="#" className="text-primary hover:underline">Add Restaurant</a>
                    <a href="#" className="text-primary hover:underline">Log in</a>
                    <button className=" text-white py-2 px-4 rounded-lg hover:bg-primary-dark">Sign up</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Header