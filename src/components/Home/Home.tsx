import "./Home.css";
import LogoPerfil from '@/assets/GhibliPerfil.png';
import { Button } from "@/components/ui/button";
import { AtSign, GalleryHorizontalEnd, Github, Globe, Linkedin } from 'lucide-react';

function Home() {
    return(
        <div className="home-container bg-square-pattern bg-repeat bg-50 text-start">
            <div className="home-content flex justify-center items-center p-6 min-h-[calc(110vh-80px)] mx-auto mesh-gradient-center overflow-hidden">
                <div className="home-main grid grid-cols-1">
                    <div className="home-header">
                        <img src={LogoPerfil} alt="FotoPerfil" className="home-avatar"/>
                        <div className="home-titles">
                            <h1 className="home-title text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Hey, I'm <span className="gradient-text">HarleyCo</span> 
                                {/*✨*/} <br />
                                A <span className="gradient-text">Software Developer</span>.
                            </h1>
                        </div>
                    </div>
                    <p className="home-bio text-xl max-w-[750px] gradient-text-white">
                        A <strong>fullstack developer</strong> with a <strong>business mindset</strong>.
                        I bring ideas to life with code. Driven by solving real problems and creating products people actually use.
                    </p>
                    <div className="home-text flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[600px] mt-8">
                            <div className="flex gap-2 lg:gap-4">
                                <Button variant="outline">
                                    <AtSign className="lucide lucide-at-sign mr-2 h-5 w-5"/>Contact Me
                                </Button>
                                <Button  variant="outline">
                                    <GalleryHorizontalEnd className="lucide lucide-gallery-horizontal-end mr-2 h-5 w-5"/>View Projects
                                </Button>
                            </div>
                            <div data-orientation="vertical" className="divider shrink-0 w-[1px] bg-foreground h-4 hidden lg:block" role="none"></div>
                            <div className="social-icons flex items-center pb-10 sm:pb-0 px-5 gap-14 md:gap-8 text-xl">
                                <a href="#" aria-label="GitHub" className="social-icon">
                                    <Github />
                                </a>
                                <a href="#" aria-label="Website" className="social-icon">
                                    <Globe />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="social-icon">
                                    <Linkedin />
                                </a>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { Home };