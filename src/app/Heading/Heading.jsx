import React from "react";
import FigmaIcon from "../Heading/FigmaIcon";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import coding2Image from "../../../public/Images/Coding6.png";
import Image from "next/image";


function Heading(props) {



    return (
        <div className="heading" id="heading">

            <div className="imgBox">
                <Image
                    width={800}
                    height={800} src="/Images/Coding6.png" alt="boy coding" />
            </div>
            <div className="cartel">
                {props.spanish ? (<div className="caja-texto">
                    <p className="">Hola mi nombre es</p>
                    <span className="cartel--nombre">Lucas G. Soria</span>
                    <h1>FRONT-END DEVELOPER</h1>
                </div>) : (<div className="caja-texto">
                    <p className="">Hello, mi name is</p>
                    <span className="cartel--nombre">Lucas G. Soria</span>
                    <h1>FRONT-END DEVELOPER</h1>
                </div>)}
            </div>

            <div className="iconos">
                <ul >
                    <li><FaReact className="w-[54px] h-[54px] text-[#61DAFB]" /></li>
                    <li><RiJavascriptFill className="w-[60px] h-[60px] text-[#F0DB4F]" /></li>
                    <li><FaGitAlt className="w-[50px] h-[55px] text-[#F34F29]" /></li>
                    <li><BiLogoMongodb className="w-[43px] h-[43px] text-[#00ED64] bg-[#001E2B] rounded-md p-1" /></li>
                    <li> <FigmaIcon /></li>
                    <li><SiAdobephotoshop className="w-[43px] h-[43px] text-[#001E36]" /></li>

                </ul>

            </div>

            {props.spanish ? (<div className="texto">
                <p>Tengo experiencia y conocimientos en el desarrollo web,
                    habiendo trabajado en proyectos  de creaciones de landing pages
                    y paginas complejas con mas de una vista y visualizacion de datos.
                    Tambien cuento con conocimientos practicos en la creacion e implementacion
                    de bases de datos SQL y no SQL.
                </p>
            </div>) : (<div className="texto">
                <p>I have experience and expertise in web development, having worked on projects ranging from creating landing 
                    pages to complex websites with multiple views and data visualization. 
                    I also have practical knowledge in creating and implementing both SQL and NoSQL databases
                </p>
            </div>)}

            <div className="circle-one"></div>


            <div className='heading__circle2Container'>
                <div className="circle-two"></div>

            </div>
        </div>
    );
}

export default Heading;
