export const Item = ({event, darkMode})=>{
  return (
    <div className="flex gap-5 items-center">
      <span className={`p-2 rounded-md 
        ${darkMode ? 'bg-gray-700' : 'bg-gray-200 text-gray-800'}`}>{event.date}</span>

      <div>
        <h1 className="text-xl font-bold">{event.title}</h1>
        <p className="text-gray-400">{event.description}</p>
      </div>
    </div>
  )
}