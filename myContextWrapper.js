import { createContext } from "react";

const initialContext = {
    title: 'default'
}

export const MyContext = createContext(initialContext);

const MyContextWrapper = ({children}) => (
    <MyContext.Provider value = {initialContext} >
        {children}
    </MyContext.Provider>
)

export default MyContextWrapper