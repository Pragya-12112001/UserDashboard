import { UserChart } from "./chart"
import { ShortCut } from "./shortCut"
import { User } from "./user"

export const Profile = ({darkMode})=>{
  return (
    <div className={`px-2 py-4 mt-2  rounded-lg 
      w-full lg:w-80 flex flex-col gap-4 
      ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
      `}
    >
      <User darkMode={darkMode}/>
      <ShortCut darkMode={darkMode}/> 
      <UserChart darkMode={darkMode}/> 
    </div>
  )
} 