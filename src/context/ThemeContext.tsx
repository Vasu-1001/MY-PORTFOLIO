import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type ThemeMode = 'dark' | 'white';

interface ThemeContextType {
  theme: ThemeMode;
  currentTheme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isDark: boolean;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio-theme') as ThemeMode | null;
    return saved === 'white' ? 'white' : 'dark';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-white', 'dark', 'light', 'theme-aurora', 'theme-sapphire', 'theme-emerald', 'theme-amber');

    if (theme === 'white') {
      root.classList.add('theme-white', 'light');
    } else {
      root.classList.add('theme-dark', 'dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        currentTheme: theme,
        setTheme,
        isDark: theme === 'dark',
        isLight: theme === 'white',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
