import React, { useContext, useEffect, useState } from "react"
import {Link}  from "react-router-dom"

import {Context} from "../../context/context"

//imgs
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.png"

export default function Header() {
    const {isMobile, showMenu, toggleShowMenu}: any = useContext(Context)

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