import React from 'react'

function Navigation() {
    return (
        <div className='navigation'>
            <div className='logo'><p>LS</p></div>
            <div className='menu'>
                <ul className='flex flex-row gap-20 '>
                    <li><a href="#heading">Inicio</a></li>
                    <li><a href="#project">Portafolio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation