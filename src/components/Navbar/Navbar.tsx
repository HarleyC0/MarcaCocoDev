import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"
import "./Navbar.css";
import { MessageCircleCode } from 'lucide-react';

function Navbar() { 
    
    return (
    <div className="component-wrapper navbar-wrapper">
        <div className="navbar-container">
            <img 
                src="./src/assets/logonewColorsSvgBlack.png" 
                alt="Logo" 
                className="navbar-logo"
            />
            <NavigationMenu className="navbar-items">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <a 
                            href="https://coco--dev.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Home
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="numNavbar">
                <p>+57 3229712878</p>
                <Button variant="outline" size="icon"><MessageCircleCode/></Button>
            </div>
        </div>
    </div>
    )

}

export { Navbar };
