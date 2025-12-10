import './Contact.css';
import { Linkedin, Github, MessageCircleMore, Youtube } from 'lucide-react';

function Contact() {
    return(
        <section className="contact-wrapper flex flex-col border-t-1 border-border px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 bg-background border-none py-20" id='Contact'>
            <div className='contact-container border-border border-1 rounded-xl z-0 overflow-hidden' style={{background: "var(--hero-gradient)"}}>
                <div className='contact-top wave-grid flex flex-col lg:flex-row lg:items-center p-6 sm:p-8 lg:p-12 gap-8 sm:gap-10 lg:gap-12 justify-between '>
                    <div className='contact-tittle flex flex-col text-left justify-center w-full lg:w-auto'>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-none text-left text-[#EE6C4D] font-bold">I enjoy the process of turning ideas into tech projects <br />
                        that solve real problems and generate impact.</h2>
                        <p className='text-black dark:text-white text-xl leading-7 mt-2'>Have a project in mind or looking for someone to join your team? Let's talk.</p>
                    </div>
                    <div className='contact-email w-full lg:w-[500px] mr-0 lg:mr-12'>
                        <form action="" className='contact-form bg-black/35 p-5 sm:p-[30px] rounded-xl border border-white/12 shadow-[0_0_30px_rgba(0,0,0,0.4)] text-left flex flex-col'>
                            <label className='block text-white text-sm mb-[0.2rem]'>Name</label>
                            <input 
                                type="text" 
                                placeholder='Your Name'
                                className='w-full mb-4 bg-transparent border border-white/18 p-2 rounded-lg text-white text-sm outline-none transition-all duration-200 ease-in-out placeholder:text-white/40'
                            />

                            <label className='block text-white text-sm mb-[0.2rem]'>Email</label>
                            <input 
                                type="email" 
                                placeholder='contact@example.com'
                                className='w-full mb-4 bg-transparent border border-white/18 p-2 rounded-lg text-white text-sm outline-none transition-all duration-200 ease-in-out placeholder:text-white/40'
                            />

                            <label className='block text-white text-sm mb-[0.2rem]'>Message</label>
                            <textarea 
                                id="" 
                                placeholder='Your msg here...' 
                                rows={5}
                                className='w-full resize-none bg-transparent border border-white/18 p-2 rounded-lg text-white text-sm outline-none transition-all duration-200 ease-in-out min-h-[80px] placeholder:text-white/40'
                            ></textarea>

                            <button 
                                type='submit' 
                                className='send-btn bg-white/10 dark:bg-black text-white dark:text-white mt-[25px] block ml-auto w-full sm:w-auto px-[0.9rem] py-2 border border-white/25 rounded-[0.3rem] cursor-pointer transition-[background-color,border-color,color] duration-150 ease-in-out hover:bg-white/15 hover:border-white/20'
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className='contact-redes color-white pb-6 sm:pb-10 grid grid-cols-[repeat(auto-fit,minmax(140px,auto))] gap-12 pt-12 justify-center'>
                    <a href="https://www.linkedin.com/in/harley-contreras/" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white px-4 sm:px-6 py-2 sm:py-3'><Linkedin/>LinkedIn</a>
                    <a href="https://github.com/HarleyC0" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white px-4 sm:px-6 py-2 sm:py-3'><Github/>Github</a>
                    <a href="https://wa.me/573229712878?text=Hola%20CocoDev" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white px-4 sm:px-6 py-2 sm:py-3'><MessageCircleMore/>WhatsApp</a>
                    <a href="https://www.tiktok.com/@cocodev.h" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white px-4 sm:px-6 py-2 sm:py-3'><Youtube/>Tiktok</a>
                </div>
            </div>
        </section>
    )
}

export { Contact };