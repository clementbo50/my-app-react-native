import { createContext, useState } from "react"

const themes = {
    light: {
        color: 'black',
        background: 'white'
    },

    dark: {
        color: 'white', 
        background: 'black'
    }
}

export const ThemeContext = createContext({theme: themes.light })
const ThemeContextWrapper = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => setTheme(theme === themes.light ? themes.dark : themes.light);
    

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeContextWrapper;