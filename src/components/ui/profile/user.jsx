import userLogo from "../../../assets/user01.png";

export const User = ({darkMode})=>{
  return (
    <div className={`flex gap-3 items-center rounded-full p-4
      ${darkMode ? "text-gray-300 bg-gray-600" : "text-gray-600 bg-gray-50"}
      `}
    >
      <img 
        className="w-14 h-14 rounded-full"
        src={userLogo} alt="user" 
      />
      <div>
        <h3 className="font-semibold text-2xl">Jhon Doe</h3>
        <p>Developer</p>
      </div>
    </div>
  )
}