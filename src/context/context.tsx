import React, {useState, useEffect} from "react"

interface ContextType {
    isMobile: boolean,
    showMenu: boolean,
    toggleShowMenu: () => void
}

const Context = React.createContext<ContextType>({
    isMobile: true,
    showMenu: true,
    toggleShowMenu: () => {}
})

function ContextProvider({children}: any) {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768 ? true : false)
    const [showMenu, setShowMenu] = useState<boolean>(window.innerWidth >= 768 ? true : false)

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth < 768 ? true : false)
        setShowMenu(prev => window.innerWidth >= 768 ? true : prev)
    } 

    function toggleShowMenu() {
        if(isMobile)
            setShowMenu(prev => !prev)
        else
            setShowMenu(true)
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange)
    }, [])

    return (
        <Context.Provider value={{isMobile, showMenu, toggleShowMenu}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
