'use client'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function Navigation() {
    const [menu, set] = useState(false)

    const openMenu = () => {
        set(state => !state)
    }
    return (
        <div className='navigation'>
            <div className='logo'><p>LS</p></div>
            <div className="submenus">
                <IoMenu  className={menu ? ('hidden'): ("burguerMenu")} onClick={openMenu}/>
                <IoCloseSharp
                onClick={openMenu}
                className={menu ? ('closeMenu'): ("hidden")}
                  />
                </div>
            <div className={menu ? ('menu'): ("noMenu overflow-hidden") }>       
                <ul className='flex flex-row gap-20 {}'>
                    <li><a href="#heading">Inicio</a></li>
                    <li><a href="#project">Portafolio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation