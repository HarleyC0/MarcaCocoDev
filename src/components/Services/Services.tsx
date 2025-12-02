import "./Services.css";
import { SquareCode, Layers, Sparkle, GalleryHorizontalEnd } from 'lucide-react';

function Services() {
    return(
        <section className="component-wrapper services-wrapper flex flex-col border-t-1 border-border px-5 sm:px-20 xl:px-52 bg-background min-h-[500px] py-20">
            <div className="services-header text-left">
                <h2 className="text-black dark:text-white text-4xl font-bold mb-2">Building Digital Experiences</h2>
                <p className='text-gray-600 dark:text-gray-400'>I specialize in creating stunning user interfaces and developing high-quality applications that stand out.</p>
            </div>
            <div className="services-content grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 pt-12">
               <div className="services-content-item flex flex-col text-left border-1 border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl">
                    <div className='flex pb-4 items-center'>
                        <div className='text-3xl md:text-4xl text-primary mr-5 dark:text-[#EE6C4D]'><SquareCode size={40}/></div>
                        <h3 className='text-2xl font-bold text-center'>What I can do</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 pb-4'>I can help develop solutions that will help you grow your business:</p>
                    <ul className='list-disc space-y-2 pl-6'>
                        <li className='font-medium'>UI/UX Design</li>
                        <li className='font-medium'>Fullstack Web Development</li>
                        <li className='font-medium'>API Integration</li>
                    </ul>
               </div>
               <div className="services-content-item flex flex-col text-left border-1 border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl">
                    <div className='flex pb-4 items-center'>
                        <div className='text-3xl md:text-4xl text-primary mr-5 dark:text-[#EE6C4D]'><Layers size={40}/></div>
                        <h3 className='text-2xl font-bold text-center'>Tools I Use</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 pb-4'>I use the latest tools and technologies to build functional and scalable products:</p>
                    <ul className='list-disc space-y-2 pl-6'>
                        <li className='font-medium'>Frontend: <br />
                        <span className="text-gray-600 dark:text-gray-400">Tailwind CSS, React, TypeScript</span></li>
                        <li className='font-medium'>Backend: <br />
                        <span className="text-gray-600 dark:text-gray-400">Node.js, Fastify, MongoDB, PostgreSQL</span></li>
                        <li className='font-medium'>Design: <br />
                        <span className="text-gray-600 dark:text-gray-400">Figma, Framer, Photoshop</span></li>
                    </ul>
               </div>
               <div className="services-content-item flex flex-col text-left border-1 border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl">
                    <div className='flex pb-4 items-center'>
                        <div className='text-3xl md:text-4xl text-primary mr-5 dark:text-[#EE6C4D]'><Sparkle size={40}/></div>
                        <h3 className='text-2xl font-bold text-center'>UI/UX Design</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 pb-4'>I am a designer first, developer second. I can help design clean and modern interfaces:</p>
                    <ul className='list-disc space-y-2 pl-6'>
                        <li className='font-medium'>User-Centered Design</li>
                        <li className='font-medium'>Modern & Clean UI</li>
                        <li className='font-medium'>Wireframes & Prototypes</li>
                    </ul>
               </div>
            </div>
            <div className="services-button-container">
                <a href="/projects" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 mt-12 ml-auto bg-gradient-gray shadow-lg"><GalleryHorizontalEnd className="mr-2"/>View My Projects</a>
            </div>
        </section>
    )
}

export { Services };