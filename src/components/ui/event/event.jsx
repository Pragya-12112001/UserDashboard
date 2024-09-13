import { events } from "../../../constants"
import { Title } from "../title"
import { Item } from "./item"

export const Event = ({darkMode})=>{
  return (
    <div className={`p-5 rounded-2xl flex flex-1 flex-col gap-5 justify-start
      ${darkMode ? 'bg-gray-600 ' : 'bg-white'}
    `}>
      <Title>Events</Title>

      {events.map((event, index)=>(
        <Item 
          key={index} 
          event={event}
          darkMode={darkMode}
          />
      )
      )}
    </div>
  )
}
