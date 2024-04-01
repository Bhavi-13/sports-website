// // components/Header.tsx
// "use client"
// import React, { useState } from 'react';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';

// const Header = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(prevState => !prevState);
//     // Toggle dark mode class on the body element
//     document.body.classList.toggle('dark-mode', darkMode);
//     document.body.classList.toggle('light-mode', !darkMode);
//   };

//   return (
//     <header className='py-5 px-20 flex justify-between items-center bg-gray-800 text-white'>
    
//        <h1 className="text-2xl font-bold">Sports</h1>
//         <button
//           className="text-white hover:text-blue-600"
//           onClick={toggleDarkMode}
//         >
//           {darkMode ? <ToggleOnIcon className="mr-2" sx={{fontSize: 30}}/> : <ToggleOffIcon sx={{fontSize: 30}} className="mr-2" />}
//         </button>
     
   
//     </header>
//   );
// };

// export default Header;
import React from 'react'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className='py-5 px-24 flex justify-between bg-white items-center dark:bg-dark sticky top-0' style={{zIndex: 100}}>
    
            <h1 className="text-2xl dark:text-white font-bold border-b-2 border-sky-400">Sports</h1>
            <div className='flex flex-1 justify-end'>
              <ThemeToggle />
            </div>
         
       
        </header>
  )
}

export default Header
