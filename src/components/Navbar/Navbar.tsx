import "./Navbar.css";
import logoImage from "@/assets/LogoSolo.png";
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

function Navbar() { 
    
    // Usa el hook para obtener la función de cambio
    const { theme, setThemeMode } = useTheme();

    return (
        <nav className="navbar">
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
                        <a href="#home" className="navbar-link">Home</a>
                        <a href="#projects" className="navbar-link">Projects</a>
                        <a href="#contact" className="navbar-link">Contact</a>
                    </div>
                </div>
                <div className="modeNavbar">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="outline">{theme==='light' ? <Moon/> : <Sun/>}</Button>
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
