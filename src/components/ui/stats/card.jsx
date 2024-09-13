export const Card = ({data, darkMode})=>{
  return (
    <div className={`p-4 rounded-2xl flex items-center gap-4 
      ${darkMode ? 'bg-gray-700' : 'bg-white'}
    `}>
      <span
        className={`text-2xl p-3 font-bold rounded-full
          ${darkMode ? 'bg-gray-600' : data.bgColor}
        `}>
          <data.icon />
      </span>
      <div >
        <h2 className="text-xl">
          <span className="text-2xl font-bold">
            {data.count}
          </span>/200
        </h2>
        <p className="font-bold">{data.title}</p>
      </div>
    </div>
  )
}