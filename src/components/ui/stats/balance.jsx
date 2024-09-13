import { FiSend } from "react-icons/fi"
import { Title } from "../title";
import { BarChart } from "./barChart";

export const Balance = ({darkMode})=>{
  return (
    <div className={` p-5 rounded-2xl flex-1 min-w-96
      ${darkMode ? 'bg-gray-600 ' : 'bg-white'}
    `}>
      <div className="flex justify-between items-center">
        <Title>Balance</Title>
        <FiSend className="p-2 rounded-full text-gray-300 w-8 h-8 bg-gray-500" />
      </div>

      <div>
        <h1 className="font-bold text-2xl">
          $124,000 
          <span className="font-medium text-xl"> (USD)</span>
        </h1>
        <span>on Jan 2024</span>
      </div>

      <BarChart darkMode={darkMode}/>
    </div>  
  )
}