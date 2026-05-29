import { useState, useEffect } from 'react';
import StackIcon from "tech-stack-icons";

const TechIcon = ({ name, size = 50, className  }: {
    type?:string;
  name: string;
  size?: number;
  className?: string;
  src?:string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const getNormalizedTechName = (name: string): string => {
    const techMap: Record<string, string> = {
      // Programming Languages
      'java':        'java',
      'python':      'python',
      'c#':          'csharp',
      'php':         'php',
      'javascript':  'js',
      'typescript':  'typescript',

      // Frontend
      'react':        'react',
      'nextjs':       'nextjs',
      'tailwind css': 'tailwindcss',
      'redux': 'redux',
      'gsap': 'gsap2',
'framer motion': 'framer',

      // Backend
      'spring boot': 'spring',
      'flask':       'flask',
      '.net':        'net',
      'node.js':     'nodejs',

      // Databases
      'mysql':      'mysql',
      'mongodb':    'mongodb',
      'sql server': 'sqldeveloper', 

      // Tools
      'git':     'git',
      'figma':   'figma',
      'postman': 'postman',
    
    };

    return techMap[name.toLowerCase()] ?? name.toLowerCase();
  };
 
  return (
    <div
      className={` flex flex-col items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative flex items-center justify-center rounded-full overflow-hidden
          transition-all duration-300 ease-in-out
          ${isHovered ? 'scale-110 shadow-lg' : 'scale-100'}
          ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}
        `}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <StackIcon
          name={getNormalizedTechName(name)}
          style={{
            width:     `${size * 0.7}px`,
            height:    `${size * 0.7}px`,
            transition: 'all 0.3s ease-in-out',
            filter:    isHovered ? 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' : 'none',
            animation: isHovered ? 'pulse-wave 2s ease-in-out infinite' : 'none',
          }}
        />
      </div>
      <span
        className={`
          mt-2 text-sm font-medium transition-all duration-300
          ${isHovered ? 'opacity-100' : 'opacity-70'}
        `}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
    </div>
  );
};

export default TechIcon;