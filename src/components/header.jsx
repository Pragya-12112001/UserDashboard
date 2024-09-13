import { FaMoon, FaSun } from "react-icons/fa"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { MdSpaceDashboard } from "react-icons/md"

export const Header = ({darkMode, toggleDarkMode, toggleSideBar})=>{
  return(
    <nav
    className={`fixed top-0 z-50 w-full 
      ${darkMode ? 'bg-gray-800 border-gray-700 dark:text-white' : 'bg-white border-gray-200 text-gray-800'
      }`}
    >
      <div className="p-3 lg:px-5 lg:pl-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button className="flex items-center p-2 text-sm text-gray-500 rounded-lg 
            md:hidden hover:bg-gray-100 focus:outline-none hover:ring-2 hover:ring-gray-200 
            dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:ring-gray-600"
            onClick={toggleSideBar}
            >
              <HiOutlineMenuAlt2 className="text-2xl " />
            </button>
            <a href="/" className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500"/>
              <span className={`self-center text-xl font-semibold sm:text-2xl whitespace-nowrap
                
               `}>
                DashBoard</span>
            </a>
          </div>


          <button className=""
            onClick={toggleDarkMode}  
          >
            {darkMode ? <FaSun className="text-yellow-400"/> : <FaMoon/>}
          </button>
        </div>
      </div>
    
    </nav>
  )
} 