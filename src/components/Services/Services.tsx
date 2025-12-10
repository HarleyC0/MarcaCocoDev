import "./Services.css";
import { SquareCode, Layers, Sparkle, GalleryHorizontalEnd } from 'lucide-react';

function Services() {
    return(
        <section className="component-wrapper services-wrapper flex flex-col border-t-1 border-border px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 bg-background min-h-[500px] py-12 sm:py-16 md:py-20">
            <div className="services-header text-left">
                <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mb-3 sm:mb-2">Transforming Ideas into Digital Solutions</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>I specialize in developing functional web applications and automation systems that solve real day-to-day problems.</p>
            </div>
            <div className="services-content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-8 sm:pt-10 lg:pt-12">
            <div className="services-content-item flex flex-col text-left border-1 border-border rounded-xl p-5 sm:p-6 lg:p-8 dark:bg-gradient-gray backdrop-blur-3xl">
                    <div className='flex pb-3 sm:pb-4 items-center'>
                        <div className='text-3xl md:text-4xl text-primary mr-3 sm:mr-4 lg:mr-5 dark:text-[#EE6C4D]'><SquareCode size={40}/></div>
                        <h3 className='text-xl sm:text-2xl font-bold text-left'>What I can do</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base pb-3 sm:pb-4'>I can help develop solutions that drive business growth:</p>
                    <ul className='list-disc space-y-2 sm:space-y-2 pl-5 sm:pl-6'>
                        <li className='text-sm sm:text-base font-medium'>Full-Stack Web Development</li>
                        <li className='text-sm sm:text-base font-medium'>Process Automation</li>
                        <li className='text-sm sm:text-base font-medium'>AI Integration</li>
                    </ul>
            </div>
            <div className="services-content-item flex flex-col text-left border-1 border-border rounded-xl p-5 sm:p-6 lg:p-8 dark:bg-gradient-gray backdrop-blur-3xl">
                    <div className='flex pb-3 sm:pb-4 items-center'>
                        <div className='text-3xl md:text-4xl text-primary mr-3 sm:mr-4 lg:mr-5 dark:text-[#EE6C4D]'><Layers size={40}/></div>
                        <h3 className='text-xl sm:text-2xl font-bold text-left'>Tools I Use</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base pb-3 sm:pb-4'>I use modern technologies and specialized tools to build functional and scalable products:</p>
                    <ul className='list-disc space-y-2 sm:space-y-2 pl-5 sm:pl-6'>
                        <li className='text-sm sm:text-base font-medium'>Frontend: <br />
                        <span className="text-gray-600 dark:text-gray-400">TypeScript, React, Tailwind CSS</span></li>
                        <li className='text-sm sm:text-base font-medium'>Backend: <br />
                        <span className="text-gray-600 dark:text-gray-400">Node.js, Express, Supabase, Java, Spring Boot, MySQL</span></li>
                        <li className='text-sm sm:text-base font-medium'>Automation and Tools: <br />
                        <span className="text-gray-600 dark:text-gray-400">N8N, Lovable, Git, GitHub, Cursor</span></li>
                    </ul>
            </div>
            <div className="services-content-item flex flex-col text-left border-1 border-border rounded-xl p-5 sm:p-6 lg:p-8 dark:bg-gradient-gray backdrop-blur-3xl">
                    <div className='flex pb-3 sm:pb-4 items-center'>
                        <div className='text-3xl md:text-4xl text-primary mr-3 sm:mr-4 lg:mr-5 dark:text-[#EE6C4D]'><Sparkle size={40}/></div>
                        <h3 className='text-xl sm:text-2xl font-bold text-left'>Business Solutions with AI</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base pb-3 sm:pb-4'>I'm a developer who understands business. I can help you integrate technology that drives real business results:</p>
                    <ul className='list-disc space-y-2 sm:space-y-2 pl-5 sm:pl-6'>
                        <li className='text-sm sm:text-base font-medium'>Commercial Process Automation</li>
                        <li className='text-sm sm:text-base font-medium'>Strategic AI Integration</li>
                        <li className='text-sm sm:text-base font-medium'>Sales and Conversion Optimization</li>
                    </ul>
            </div>
            </div>
            <div className="services-button-container flex justify-center sm:justify-start">
                <a href="/projects" className="inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-6 sm:px-8 mt-8 sm:mt-10 lg:mt-12 ml-0 sm:ml-auto bg-gradient-gray shadow-lg"><GalleryHorizontalEnd className="mr-2" size={18}/>View My Projects</a>
            </div>
        </section>
    )
}

export { Services };