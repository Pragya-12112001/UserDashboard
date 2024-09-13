import { ListItem } from "./ListItems"; 
import { links } from "../constants";

export const SideBar = ({isSideBarOpen, darkMode})=>{
  return(
    <aside 
      className={`fixed top-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200
        md:translate-x-0 
        transition-transform ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full' }
        ${darkMode ? 'dark:bg-gray-800 dark:border-gray-700 text-white' : ""}
        `}
    >

      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
            {
              links.map((link, index) => (
                <ListItem key={index} {...link} 
                  darkMode={darkMode}
                />
              ))
            }
        </ul> 
      </div>

    </aside>
  )
}