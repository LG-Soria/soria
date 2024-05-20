import React from "react";
import FigmaIcon from "../Heading/FigmaIcon";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import coding2Image from "../../../public/Images/Coding6.png"; 
import Image from "next/image";


function Heading() {



    return (
        <div className="heading" id="heading">

            <div className="imgBox">
                <Image className="w-20 h-20" src="/images/Coding6.png" alt="boy coding" />
            </div>
            <div className="cartel">
                <div className="caja-texto">
                    <p className="">Hola mi nombre es</p>
                    <span className="cartel--nombre">Lucas G. Soria</span>
                    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
                </div>
            </div>

            <div className="iconos">
                <ul >
                    <li><FaReact className="w-[54px] h-[54px] text-[#61DAFB]" /></li>
                    <li><RiJavascriptFill className="w-[60px] h-[60px] text-[#F0DB4F]" /></li>
                    <li><FaGitAlt className="w-[50px] h-[55px] text-[#F34F29]" /></li>
                    <li><SiTailwindcss className="w-[43px] h-[43px] text-[#32B1C1] bg-[#242938] rounded-md p-1" /></li>
                    <li> <FigmaIcon /></li>
                    <li><SiAdobephotoshop className="w-[43px] h-[43px] text-[#001E36]" /></li>

                </ul>

            </div>

            <div className="texto">
                <p>Tengo experiencia y conocimientos en el desarrollo web,
                    habiendo trabajado en proyectos  de creaciones de landing pages
                    y paginas complejas con mas de una vista y visualizacion de datos.
                    Tambien cuento con conocimientos practicos en la creacion e implementacion
                    de bases de datos SQL, como tambien no SQL.
                </p>
            </div>

            <div className="circle-one"></div>


            <div className='heading__circle2Container'>
                <div className="circle-two"></div>

            </div>
        </div>
    );
}

export default Heading;
