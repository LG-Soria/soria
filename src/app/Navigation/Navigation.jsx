'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { HiMiniLanguage } from "react-icons/hi2";

function Navigation(props) {
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
                        <li>{props.spanish ? (<a href="#heading">Inicio</a>) : (<a href="#heading">Home</a>)}</li>
                        <li>{props.spanish ? (<a href="#project">Portafolio</a>) : (<a href="#project">Portfolio</a>)}
                        </li>
                        <li>{props.spanish ? (<a href="#contact">Contacto</a>) : (<a href="#contact">Contact</a>)}
                        </li>
                    </ul>
                </div>

            </div>
            <div className='menu'>
                <ul className='flex flex-row gap-20 {}'>
                    <li>{props.spanish ? (<a href="#heading">Inicio</a>) : (<a href="#heading">Home</a>)}</li>
                    <li>{props.spanish ? (<a href="#project">Portafolio</a>) : (<a href="#project">Portfolio</a>)}
                    </li>
                    <li>{props.spanish ? (<a href="#contact">Contacto</a>) : (<a href="#contact">Contact</a>)}
                    </li>
                </ul>
            </div>
            <div className='language-switcher'>
                <button onClick={() =>  props.setSpanish(true)} className={`language-button ${props.spanish ? 'active' : ''}`} >ES</button>
                <button onClick={() =>  props.setSpanish(false)}className={`language-button ${props.spanish ? '' : 'active'}`}>EN</button>
            </div>
        </div>
    )
}

export default Navigation