import React, { useEffect, useState } from "react"
import {Link}  from "react-router-dom"

//imgs
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.png"

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768 ? true : false)
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 768 ? true : false)

    console.log(showMenu)

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
        <header className="header">
            <Link to="/"><img className="header__logo" src={logo} /></Link>
            {showMenu && 
                <div className="header__menu">
                    <nav className="header__nav">   
                        <Link onClick={toggleShowMenu} className="header__nav-item fs-regular text-white bold" to="/Features">Features</Link>
                        <Link onClick={toggleShowMenu} className="header__nav-item fs-regular text-white bold" to="/Pricing">Pricing</Link>
                        <Link onClick={toggleShowMenu} className="header__nav-item fs-regular text-white bold" to="/Resources">Resources</Link>
                    </nav>
                    <hr className="header__hr"/>
                    <div className="header__btn-container">
                        <button onClick={toggleShowMenu} className="btn--login bold">Login</button>
                        <button onClick={toggleShowMenu} className="btn--signUp btn btn--round">Sign Up</button>
                    </div>
                </div>
            }
            {isMobile && <img onClick={toggleShowMenu} className="header__menu-icon" src={menu}/>}
        </header>
    )
}