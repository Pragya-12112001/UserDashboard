export const Member = ({user, darkMode})=>{
  return(
    <div className={`flex justify-between items-center`}>
      <div className="flex items-center gap-2 p-2">
        <img 
          src={user.image} 
          alt={user.name} 
          className="w-12 h-12 rounded-full flex"  
        />
        <div>
          <h2 className="font-bold">{user.name}</h2>
          <span className="font-semibold text-gray-400 text-sm">{user.country}</span> 
        </div>
      </div>
      
      <span className={`${darkMode ? 'bg-gray-700' : user.bgColor} py-1 px-2 rounded-l`}>{user.role}</span>
    </div>
  )
}