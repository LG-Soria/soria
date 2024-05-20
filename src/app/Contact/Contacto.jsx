'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contacto() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_ddwtokk","template_xhqu1m9", form.current, {
          publicKey: 'U9vlhEpi09vVrMPrX',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div className='contacto' id='contact'>
           
                <div className='contacto__titulo'>
                    <h3 >Contacto</h3>
                    <div className='contacto__subline'></div>
              
            </div>

            <div className='contacto__texto'>
                <h4>¿Te queres comunicar conmigo?</h4>
                <p>
                    Podes hacerlo a travez de mis redes sociales, voy a estar para
                    responderte tanto en <a  href='https://www.linkedin.com/in/lucas-soria-g/' target='/blank' rel="noreferrer"  className='linkedin'>Linkedin</a>,  
                     <a  href='https://x.com/_LSoria' target='/blank' rel="noreferrer" className='twitter'> Twitter</a>,  
                    <a href='https://www.instagram.com/lucas.g996/' target='/blank' rel="noreferrer" className='instagram'> Instagram</a> y 
                    <a href='https://github.com/LG-Soria' target='/blank' rel="noreferrer" className='github'> GitHub</a>.
                    <br></br>Tambien te podes comunicar enviandome
                    un email a   <a href='lucas_s96@outlook.com' target='/blank' className='outlook'>lucas_s96@outlook.com</a>  o rellenando el siguiente formulario con tus datos y me voy a estar comunicando en la brevedad.</p>
            </div>

            <div className='contacto__formulario'>
                <div>
                    <form  ref={form} onSubmit={sendEmail}>
                        <div class="inputbox">
                            <input required="required" type="text" name="from_name" id="name"  />
                            <span>Nombre</span>
                            <i></i>
                        </div>
                        <div class="inputbox">
                            <input required="required" type="email" name="from_email" id="email"   />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div class="inputbox">
                            <input required="required" type="text" name="subject" id="subject"   />
                            <span>Asunto</span>
                            <i></i>
                        </div>
                        <div class="contacto__textarea inputbox">
                            <textarea required="required" name="message" id="message"  />
                            <span>Mensaje</span>
                            <i></i>
                        </div>
                        <div className='contacto__button'><button type="submit">Enviar</button></div>
                    </form>
                </div>
            </div>


            <div
                className='circleContainer 
            w-100
            h-100 '>

                <div className='contacto__circle4'></div>

            </div>
        </div>
    )
}

export default Contacto