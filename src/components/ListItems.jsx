
export const ListItem = ({href, icon: Icon, text, badge, darkMode})=>{
  return(
    <li>
      <a
        to={href}
        className={`flex items-center p-2 rounded-lg
          ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}
          `}
      >
      <Icon className='mr-3'/>
      <span className="flex-1 mr-3">{text}</span>
      {badge && (
        <span
          className={`
            flex items-center justify-center px-2 ms-3 font-medium rounded-full
            ${darkMode ? badge.darkColor : badge.color}
            `}
        >
          {badge.text}
        </span>


      )}  
      </a>  
    </li>  
  )
}

