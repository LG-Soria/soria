'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contacto(props) {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_ddwtokk", "template_xhqu1m9", form.current, {
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

            {props.spanish ? (<div className='contacto__titulo'>
                <h3 >Contacto</h3>
            </div>) : (<div className='contacto__titulo'>
                <h3 >Contact</h3>
            </div>)}

            {/**           <div className='contacto__subline'></div> */}


            {props.spanish ? (<div className='contacto__texto'>  <h4>¿Te queres comunicar conmigo?</h4>
                <p>
                    Puedes hacerlo a través de mis redes sociales. Estaré disponible para responderte tanto en <a href='https://www.linkedin.com/in/lucas-soria-g/' target='/blank' rel="noreferrer" className='linkedin'>Linkedin</a>
                    <br></br> como en   <a href='https://github.com/LG-Soria' target='/blank' rel="noreferrer" className='github'>GitHub</a>.
                    Tambien puedes comunicarte enviándome un email a <a href='mailto:lucas_s96@outlook.com'
                        target='/blank' className='outlook'>lucas_s96@outlook.com</a>  o completando el siguiente formulario con tus datos y me pondré en contacto.</p></div>) : (<div className='contacto__texto'>  <h4>
                            DO YOU WANT TO GET IN TOUCH WITH ME?</h4>
                            <p>
                                You can reach out through my social media channels. I&apos;ll be available to respond on both <a href='https://www.linkedin.com/in/lucas-soria-g/' target='/blank' rel="noreferrer" className='linkedin'>Linkedin</a> 
                                and <a href='https://github.com/LG-Soria' target='/blank' rel="noreferrer" className='github'>GitHub</a>.
                                You can also contact me by sending an email to <a href='mailto:lucas_s96@outlook.com'
                                    target='/blank' className='outlook'>lucas_s96@outlook.com</a> or by filling out the following form with your information, and I&apos;ll get back to you.</p></div>)
            }
            <div className='contacto__formulario'>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="inputbox">
                            <input required="required" type="text" name="from_name" id="name" />

                            {props.spanish ? (<span>Nombre</span>) : (<span>Name</span>)}
                            <i></i>
                        </div>
                        <div class="inputbox">
                            <input required="required" type="text" name="from_email" id="email" />
                            {props.spanish ? (<span>Email</span>) : (<span>Email</span>)}
                            <i></i>
                        </div>
                        <div class="inputbox">
                            {props.spanish ? (<span>Asunto</span>) : (<span>Subject</span>)}
                            <input required="required" type="text" name="subject" id="subject" />
                            <i></i>
                        </div>
                        <div class="contacto__textarea inputbox">

                            <textarea required="required" name="message" id="message" />

                            {props.spanish ? (<span>Mensaje</span>) : (<span>Message</span>)}

                            <i></i>
                        </div>
                        <div className='contacto__button'>
                            {props.spanish ? (<button type="submit">Enviar</button>) : (<button type="submit">Send</button>)}


                        </div>
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