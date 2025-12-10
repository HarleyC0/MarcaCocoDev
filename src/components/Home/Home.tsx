import LogoPerfil from '@/assets/GhibliPerfil.png';
import { Button } from "@/components/ui/button";
import { AtSign, GalleryHorizontalEnd, Github, Globe, Linkedin } from 'lucide-react';

function Home() {

    const textGradientStyle = {
        background: 'linear-gradient(0deg, #EE6C4D 0%, #ec795c 50%, #eb8e77 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    return(
        <div className="text-start relative">
            <div 
                style={{
                    content: '""',
                    position: 'absolute',
                    top: '20%',
                    right: '35%',
                    width: '700px',
                    height: '60%',
                    zIndex: -1,
                    backgroundImage: 'var(--mesh-gradient)',
                    filter: 'blur(100px)',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
            />
            <div className="flex justify-center items-center p-6 min-h-[calc(110vh-80px)] mx-auto mesh-gradient-center overflow-hidden">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-10 pb-8">
                        <img src={LogoPerfil} alt="FotoPerfil" className="w-32 color:transparent rounded-full border-orange-500 shadow-lg shadow-orange-500/30" width="128" height="128" decoding="async" data-nimg="1" sizes="(max-width: 768px) 100px,(max-width: 1200px) 120px, 128px"/>
                        <div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Hey, I'm <span className="gradient-text" style={textGradientStyle}>HarleyCo</span> 
                                {/*✨*/} <br />
                                A <span className="gradient-text" style={textGradientStyle}>Software Developer</span>.
                            </h1>
                        </div>
                    </div>
                    <p className="text-xl max-w-[750px]">
                        A <strong>fullstack developer</strong> with a <strong>business mindset</strong>.
                        I bring ideas to life with code. Driven by solving real problems and creating products people actually use.
                    </p>
                    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[600px] mt-8">
                            <div className="flex gap-2 lg:gap-4">
                                <Button variant="outline">
                                    <AtSign className="lucide lucide-at-sign mr-2 h-5 w-5"/>Contact Me
                                </Button>
                                <Button  variant="outline">
                                    <GalleryHorizontalEnd className="lucide lucide-gallery-horizontal-end mr-2 h-5 w-5"/>View Projects
                                </Button>
                            </div>
                            <div data-orientation="vertical" className="divider shrink-0 w-[1px] bg-foreground h-4 hidden lg:block" role="none"></div>
                            <div className="flex items-center pb-10 sm:pb-0 px-5 gap-14 md:gap-8 text-xl">
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