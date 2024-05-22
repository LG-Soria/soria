import React from 'react'
//import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import proyecto3 from "../../../public/Images/proyecto1.jpg"
import proyecto1 from '../../../public/Images/proyecto2.jpg'
import proyecto2 from "../../../public/Images/proyecto3.jpg"
import proyecto4 from "../../../public/Images/proyecto4.png"
import proyecto5 from '../../../public/Images/proyecto5.jpg'
import proyecto6 from "../../../public/Images/proyecto6.png"
import Image from 'next/image';



function Proyectos() {
  const proyectList = [
    {
      id: 1,
      src: "/Images/proyecto1.jpg",
      alt: (id) => `Proyecto ${id}`,
      title: "Apperia Landing page",
      link: "https://lg-soria.github.io/Apeperia-responsive/",
      linkGithub: "https://github.com/LG-Soria/Apeperia-responsive"
    },
    {
      id: 2,
      src: "/Images/proyecto2.jpg",
      alt: (id) => `Proyecto ${id}`,
      title: "Blog page",
      link: "https://lg-soria.github.io/NewHomepageMain/",
      linkGithub: "https://github.com/LG-Soria/NewHomepageMain"
    },
    {
      id: 3,
      src: "/Images/proyecto3.jpg",
      alt: (id) => `Proyecto ${id}`,
      title: "Portfolio Photography",
      link: "https://lg-soria.github.io/photography-album-web/",
      linkGithub: "https://github.com/LG-Soria/photography-album-web"

    },
    {
      id: 4,
      src: "/Images/proyecto4.png",
      alt: (id) => `Proyecto ${id}`,
      title: "Burguer Store",
      link: "www.github.com/lg-soria/landingpage",
      linkGithub: "https://github.com/LG-Soria/burger-project"

    },
    {
      id: 5,
      src: "/Images/proyecto5.jpg",
      alt: (id) => `Proyecto 5`,
      title: "Proyecto Good-Foot",
      link: "https://lg-soria.github.io/Fruto-y-fruta-proyecto/",
      linkGithub: "https://github.com/LG-Soria/Fruto-y-fruta-proyecto"

    },
    {
      id: 6,
      src: "/Images/proyecto6.png",
      alt: (id) => `Proyecto ${id}`,
      title: "Clothes Store ",
      link: "www.github.com/lg-soria/landingpage",
      linkGithub: "https://github.com/LG-Soria/outfit-project"
    },

  ];

  return (
    <div className='proyectos__container' >

      <div className='titulo' id='project'>
        <h2>Proyectos</h2>
      </div>
      {/**  <div className='subline'></div> */}
      <div className='proyectos'>
        <ul>
          {proyectList.map((image, index) => {
            return (
              <div>       <a className='cursor-pointer' href={image.link} target="_blank" rel="noopener noreferrer">
                <li className='item ' key={index}>

                  <Image className='image' width={500}
                    layout="responsive"
                    height={500} key={index} src={image.src} alt={image.title} />
                  <div className='item__text'>
                    <a href={image.link} target="_blank" rel="noreferrer" className='item__title'><p >{image.title}</p></a>
                    <a href={image.linkGithub} rel="noreferrer" className='span' target="_blank"> <FaGithub className='icon' /></a>
                  </div>
                </li>  </a>
              </div>
            )
          })}

        </ul>
      </div>

      <div className='flecha' >{
        /**
  <IoIosArrowDown className='iconArrow' /> */
      }
      </div>
      { /**  <div className='proyectos__circle1Container'> 
   
    </div>
        <div className='proyectos__circle2Container'>
      <div className='contacto__circle2'></div>
    </div> */}
      <div className='contacto__circle1'></div>


    </div>
  )
}

export default Proyectos;