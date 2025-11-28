import "./Home.css";
import LogoPerfil from '@/assets/GhibliPerfil.png';
import { Button } from "@/components/ui/button";
import { AtSign, GalleryHorizontalEnd, Github, Globe, Linkedin, X } from 'lucide-react';

function Home() {
    return(
        <div className="home-container">
            <div className="home-content">
                <div className="home-main">
                    <div className="home-header">
                        <img src={LogoPerfil} alt="FotoPerfil" className="home-avatar" />
                        <div className="home-titles">
                            <h1 className="home-title">
                                Hey, I'm <span className="gradient-text">HarleyCo</span> 
                                {/*✨*/}
                            </h1>
                            <h2 className="home-subtitle">
                                A <span className="gradient-text">Software Developer</span>.
                            </h2>
                        </div>
                    </div>
                    <div className="home-text">
                        <p className="home-bio">
                            A <strong>fullstack developer</strong> with a <strong>business mindset</strong>.
                            I bring ideas to life with code. Driven by solving real problems and creating products people actually use.
                        </p>
                        <div className="home-actions">
                            <Button variant="outline" className="contact-btn">
                                <AtSign/>Contact Me
                            </Button>
                            <Button className="projects-btn">
                                <GalleryHorizontalEnd/>View Projects
                            </Button>
                            <div className="divider"></div>
                            <div className="social-icons">
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
        </div>
    );
}

export { Home };