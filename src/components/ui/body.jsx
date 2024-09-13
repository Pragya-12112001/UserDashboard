export const Body = ({children, darkMode})=>{
  return (
    <div className={`text-gray-500 bg-gray-100 p-4 md:pl-64 min-h-svh
    sm:ml flex gap-2 flex-col lg:flex-row translate-all duration-200 mt-14 
    ${darkMode ? 'bg-gray-800 text-white' : ''}
    `}>{children}</div>
  )
}