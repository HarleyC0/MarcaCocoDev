import logoImage from "@/assets/LogoSolo.png";
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() { 

    // Estado del manu para mobile
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    // current location
    const location = useLocation().pathname;
    // funcion para scroll a seccion basada en ID
    const scrollToSection = (sectionId: string) => {

        // Si la ruta actual no es "/" 
        if (location !== "/") {
            window.sessionStorage.setItem('scrollTo', sectionId)
            window.location.href = "/"
            return;
        }
        // si la ruta actual es "/"
        const element = document.getElementById(sectionId)
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    
    // Usa el hook para obtener la función de cambio
    const { theme, setThemeMode } = useTheme();

    return (
        <nav className="navbar w-full border-b border-[#2a2a2a] sticky top-0 z-[2] backdrop-blur-2xl bg-white/80 dark:bg-black">
            <div className="navbar-content flex items-center justify-between py-4 px-4 sm:px-8 lg:px-[clamp(1rem, 10vw, 13rem)] max-w-full">
                <div className="navbar-left flex items-center gap-4 sm:gap-8">
                    <div className="navbar-brand flex items-center gap-3">
                        <img 
                            src={logoImage} 
                            alt="Logo" 
                            className="navbar-logo-icon h-8 w-8"
                        />
                        <span className="navbar-brand-text text-[#EE6C4D] text-xl font-semibold tracking-tight">Coco'Dev</span>
                    </div>
                    <div className="navbar-links hidden lg:flex items-center pl-12 gap-20">
                        <a href="/" className="navbar-link no-underline text-base font-normal py-2 px-4 rounded-lg transition-all duration-200 ease-in-out bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">Home</a>
                        <a href="/projects" className="navbar-link no-underline text-base font-normal py-2 px-4 rounded-lg transition-all duration-200 ease-in-out bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">Projects</a>
                        <Button onClick={() => scrollToSection('Contact')} className="navbar-link no-underline text-base font-normal py-2 px-4 rounded-lg transition-all duration-200 ease-in-out bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">Contact</Button>
                    </div>
                </div>
                <div className="navbar-right flex items-center gap-4">
                    <div className="modeNavbar flex items-center justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="outline" className="bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">{theme==='light' ? <Moon/> : <Sun/>}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="end">
                                <DropdownMenuItem onClick={() => setThemeMode('dark')}>Dark</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setThemeMode('light')}>Light</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Button variant="outline" className="lg:hidden bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <div className="navbar-mobile-menu flex flex-col gap-2 px-4 pb-4 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-[#2a2a2a]">
                    <a 
                        href="/" className="navbar-link no-underline text-base font-normal py-3 px-4 rounded-lg transition-all duration-200 ease-in-out text-black dark:text-white hover:bg-accent dark:hover:bg-accent text-left"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a 
                        href="/projects" className="navbar-link no-underline text-base font-normal py-3 px-4 rounded-lg transition-all duration-200 ease-in-out text-black dark:text-white hover:bg-accent dark:hover:bg-accent text-left"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <Button 
                        onClick={() => {
                            scrollToSection('Contact');
                            setIsMenuOpen(false);
                        }} 
                        className="navbar-link no-underline text-base font-normal py-3 px-4 rounded-lg transition-all duration-200 ease-in-out bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent justify-start"
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </nav>
    )

}

export { Navbar };
