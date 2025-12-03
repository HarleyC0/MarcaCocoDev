import './Contact.css';
import { Linkedin, Github, MessageCircleMore, Youtube } from 'lucide-react';

function Contact() {
    return(
        <section className="contact-wrapper" id='Contact'>
            <div className='contact-container' style={{background: "var(--hero-gradient)"}}>
                <div className='contact-top'>
                    <div className='contact-tittle'>
                        <h2>Bringing your ideas to life. <br />
                        Let's turn your vision into reality</h2>
                        <p className='text-black dark:text-white'>Have a project in mind or just want to chat? Let's connect!</p>
                    </div>
                    <div className='contact-email'>
                        <form action="" className='contact-form'>
                            <label>Name</label>
                            <input type="text" placeholder='Your Name'/>

                            <label>Email</label>
                            <input type="email" placeholder='contact@example.com'/>

                            <label>Message</label>
                            <textarea id="" placeholder='Your msg here...' rows={5}></textarea>

                            <button type='submit' className='send-btn bg-white/10 dark:bg-black text-white dark:text-white'>Send</button>
                        </form>
                    </div>
                </div>
                <div className='contact-redes'>
                    <a href="" className='text-black dark:text-white'><Linkedin/>LinkedIn</a>
                    <a href="" className='text-black dark:text-white'><Github/>Github</a>
                    <a href="" className='text-black dark:text-white'><MessageCircleMore/>WhatsApp</a>
                    <a href="" className='text-black dark:text-white'><Youtube/>Tiktok</a>
                </div>
            </div>
        </section>
    )
}

export { Contact };