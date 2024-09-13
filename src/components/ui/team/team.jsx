import { users } from "../../../constants"
import { Title } from "../title"
import { Member } from "./member"

export const Team = ({darkMode})=>{
  return (
    <div className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-600 ' : 'bg-white'}`}>
      <Title>Team</Title>
      {users.map((user, index)=>(
        <Member  
          key={index} 
          user={user}
          darkMode={darkMode}
        />
      ))}
    </div>
  )
}