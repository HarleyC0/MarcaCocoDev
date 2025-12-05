import "./Navbar.css";
import logoImage from "@/assets/LogoSolo.png";
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { useLocation } from "react-router-dom";

function Navbar() { 

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
        <nav className="navbar bg-white dark:bg-black backdrop-blur-2xl bg-white/80 dark:bg-inherit dark:bg-transparent-gradient">
            <div className="navbar-content">
                <div className="navbar-left">
                    <div className="navbar-brand">
                        <img 
                            src={logoImage} 
                            alt="Logo" 
                            className="navbar-logo-icon"
                        />
                        <span className="navbar-brand-text">Coco'Dev</span>
                    </div>
                    <div className="navbar-links">
                        <a href="/" className="navbar-link bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">Home</a>
                        <a href="/projects" className="navbar-link bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">Projects</a>
                        <Button onClick={() => scrollToSection('Contact')} className="navbar-link bg-white dark:bg-black text-black dark:text-white hover:bg-accent dark:hover:bg-accent">Contact</Button>
                    </div>
                </div>
                <div className="modeNavbar">
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
            </div>
        </nav>
    )

}

export { Navbar };
