"use client"
import React, { useState, useEffect, use } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
  return (
    <div className='w-16 h-8 relative dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1'
    onClick={() => setDarkMode(!darkMode)}
    
    >
        <DarkModeIcon className='text-white' sx={{fontSize: 18}} />
        <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 right-0 top-1" >
            <LightModeIcon className='ml-auto text-yellow-400' sx={{fontSize: 18}}/>
        </div>
    </div>
  )
}

export default ThemeToggle
