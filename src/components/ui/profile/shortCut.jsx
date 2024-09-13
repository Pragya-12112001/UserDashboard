import { Title } from "../title"
import { shortcutLink } from "../../../constants"
import { IoIosArrowForward } from "react-icons/io"

export const ShortCut = ({darkMode})=>{
  return (
      <div
        className={`flex gap-4 flex-col rounded-lg p-4 
          ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-50'}
          `}
      >
        <Title>Shortcuts</Title>

        {shortcutLink.map((list, index)=>(
          <div 
            key={index}
            className="flex justify-between cursor-pointer rounded-sm"
            >
            <div className="flex gap-4 items-center">
              <div className={` p-2 rounded-full w-8 ${darkMode ? 'bg-gray-800 ' : 'bg-blue-100'}`}>
                <span><list.icon/></span>
              </div>
              <h3 className="font-medium">{list.title}</h3>
            </div>
            <span
              className={`p-2 rounded-md hover:mr-2 transitionn-all duration-200
                ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}
                `}
            >
              <IoIosArrowForward/>
            </span>
          </div>
        ))}  
      </div>
      )
}