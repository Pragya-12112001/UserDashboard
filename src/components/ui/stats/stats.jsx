import { empolyeesData } from "../../../constants";
import { Balance } from "./balance";
import { Card } from "./card";

export const Stats= ({darkMode})=>{
  return (
    <div className="flex flex-col al md:flex-row gap-5 flex-wrap justify-center">
      <div className="flex flex-col gap-4 ">
      <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'}
        flex p-4 font-bold text-2xl justify-center rounded-xl
        `}>Empolyees</div>
        {empolyeesData.map((data, index)=>(
          <Card key={index} data={data} darkMode={darkMode}/>
        ))}
      </div>

      <Balance darkMode={darkMode}/> 
    </div>
  )
}