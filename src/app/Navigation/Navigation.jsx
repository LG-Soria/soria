'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function Navigation() {
    const [menu, setMenu] = useState(false)
    const menuRef = useRef(null);

    const openMenu = () => {
        setMenu(state => !state)
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenu(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    return (
        <div className='navigation'>
            <div className='logo'><p>LS</p></div>
            <div className="iconsMenu">
                <IoMenu className={menu ? ('hidden') : ("burguerMenu")} onClick={openMenu} />
                <IoCloseSharp
                    onClick={openMenu}
                    className={menu ? ('closeMenu') : ("hidden")}
                />
            </div>
            <div className={`responsiveMenu ${menu ? '' : 'hiddenMenu'}`} ref={menuRef}>
                <div className={menu ? ('yesMenu') : ("noMenu")}>
                    <ul className='flex flex-row  '>
                        <li><a href="#heading">Inicio</a></li>
                        <li><a href="#project">Portafolio</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>

            </div>
            <div className='menu'>
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