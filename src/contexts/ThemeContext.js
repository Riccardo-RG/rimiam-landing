'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// Theme configuration
const THEME_CONFIG = {
  STORAGE_KEY: 'rimiam-theme',
  THEMES: ['light', 'dark', 'system'],
  DEFAULT_THEME: 'system',
  META_COLORS: {
    dark: '#0a0a0a',
    light: '#fefdf8'
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME_CONFIG.DEFAULT_THEME);
  const [systemTheme, setSystemTheme] = useState('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  // Get the actual theme (resolving 'system' to actual theme)
  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Set initial system theme
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_CONFIG.STORAGE_KEY);
      if (savedTheme && THEME_CONFIG.THEMES.includes(savedTheme)) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (!isLoaded) return;

    try {
      // Save to localStorage
      localStorage.setItem(THEME_CONFIG.STORAGE_KEY, theme);

      // Apply to document
      document.documentElement.setAttribute('data-theme', resolvedTheme);

      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', THEME_CONFIG.META_COLORS[resolvedTheme]);
      }

      // Update body class for additional styling if needed
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
      document.body.classList.add(`theme-${resolvedTheme}`);

    } catch (error) {
      console.warn('Failed to apply theme:', error);
    }
  }, [theme, resolvedTheme, isLoaded]);

  // Theme switching functions
  const setLightTheme = useCallback(() => setTheme('light'), []);
  const setDarkTheme = useCallback(() => setTheme('dark'), []);
  const setSystemThemeMode = useCallback(() => setTheme('system'), []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const currentResolved = prev === 'system' ? systemTheme : prev;
      return currentResolved === 'dark' ? 'light' : 'dark';
    });
  }, [systemTheme]);

  const value = {
    // Current theme state
    theme,
    resolvedTheme,
    systemTheme,
    isLoaded,

    // Theme setters
    setTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme: setSystemThemeMode,
    toggleTheme,

    // Convenience booleans
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    isSystem: theme === 'system',

    // Theme configuration
    availableThemes: THEME_CONFIG.THEMES,
  };

  return (
    <ThemeContext.Provider value={value}>
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

// Custom hook for theme-aware styling
export function useThemeStyles() {
  const { resolvedTheme, isDark, isLight } = useTheme();

  return {
    theme: resolvedTheme,
    isDark,
    isLight,
    // Helper functions for conditional styling
    when: (condition, styles) => condition ? styles : '',
    dark: (styles) => isDark ? styles : '',
    light: (styles) => isLight ? styles : '',
  };
}
