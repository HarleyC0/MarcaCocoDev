import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    // Función principal para aplicar el tema al <html>
    const applyThemeToDOM = useCallback((newTheme: Theme) => {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    /**
     * Función que cambia el tema. Puede recibir un tema específico
     * o alternar el actual si no se le pasa un argumento.
     */
    const setThemeMode = (mode?: Theme) => {
        const newTheme = mode || (theme === 'light' ? 'dark' : 'light');
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyThemeToDOM(newTheme);
    };

    /**
     * Efecto al cargar: Lee la preferencia guardada o la del sistema operativo.
     */
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let initialTheme: Theme;
        if (savedTheme) {
            initialTheme = savedTheme;
        } else {
            initialTheme = prefersDark ? 'dark' : 'light';
        }

        setTheme(initialTheme);
        applyThemeToDOM(initialTheme);
    }, [applyThemeToDOM]);

    // Devolvemos el tema actual y la función de cambio mejorada
    return { theme, setThemeMode, toggleTheme: setThemeMode }; // Exportamos toggleTheme como alias
};