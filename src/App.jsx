import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { SideBar } from './components/sidebar';
import { Body } from './components/ui/body';
import { Content } from './components/ui/content';
import { Profile } from './components/ui/profile/profile';
import { Stats } from './components/ui/stats/stats';
import { Team } from './components/ui/team/team';
import { Event } from './components/ui/event/event';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  const toggleSideBar = ()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode}
        toggleSideBar={toggleSideBar}
      />
      <SideBar 
        isSideBarOpen={isSideBarOpen}
        darkMode={darkMode}
      />

      <Body darkMode={darkMode}>
        <Content>
          <Stats darkMode={darkMode}/>
          <div className='flex flex-col gap-3 lg:flex-row flex-wrap justify-center'>
            <Team darkMode={darkMode}/>
            <Event darkMode={darkMode}/>
          </div>
        </Content>
        <Profile darkMode={darkMode}/>
      </Body>
    </div>
  )
}

export default App
