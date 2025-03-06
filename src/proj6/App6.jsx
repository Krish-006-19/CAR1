import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';

function App6() {
    let [themeMode, setThemeMode] = useState('light');
    
    let lightTheme =()=>{
        setThemeMode('light');
    }

    let darkTheme =()=>{
        setThemeMode('dark');
    }

    useEffect(()=>{
        let htm = document.querySelector('html')
        htm.classList.remove('light','dark')
        htm.classList.add(themeMode)
    },[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card/>
                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default App6