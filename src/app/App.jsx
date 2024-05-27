'use client'
import React from 'react'
import Navigation from "./Navigation/Navigation";
import Heading from "./Heading/Heading";
import Proyectos from "./Projects/Proyectos";
import Contacto from "./Contact/Contacto";
import "./Navigation/navigation.css";
import "./Heading/heading.css";
import "./Projects/proyectos.css";
import "./Contact/contacto.css";
import { useState } from "react";

function App() {
    const [spanish, setSpanish] = useState(false)
    return (
        <div>
            <Navigation  spanish={spanish} setSpanish={setSpanish}/>
            <Heading spanish={spanish}/>
            <Proyectos spanish={spanish} />
            <Contacto spanish={spanish} />
        </div>
    )
}

export default App