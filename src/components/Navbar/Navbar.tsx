import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"
import "./Navbar.css";
import { MessageCircleCode } from 'lucide-react';
import logoImage from "@/assets/logonewColorsSvgBlack.png";

function Navbar() { 
    
    return (
    <div className="component-wrapper navbar-wrapper">
        <div className="navbar-container">
            <img 
                src={logoImage} 
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
                            HOME
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>BLOG</NavigationMenuLink> 
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>SERVICES</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>PROJECTS</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>CONTACT</NavigationMenuLink>
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
