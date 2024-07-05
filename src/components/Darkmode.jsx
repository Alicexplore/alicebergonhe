import { useState, useEffect } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'light'; 
    setTheme(initialTheme);
    localStorage.setItem('theme', initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('transition-colors', 'duration-500');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    const newRotateAngle = rotateAngle === 0 ? 360 : 0;
    setRotateAngle(newRotateAngle);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='z-50 right-10'>
      <div>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only peer"
            onClick={handleThemeSwitch}
            readOnly
          />
          <div className="block relative bg-white w-16 h-2 rounded-full before:absolute
           before:bg-white before:w-6 before:h-6 before:-mt-[9px] before:rounded-full before:transition-all 
           before:duration-1000 before:left-[-3px] peer-checked:before:left-[40px] peer-checked:before:bg-white">
           </div>
        </label>
      </div>
    </div>
  );
}
