import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import "./Navbar.css";

function Navbar() { 
    
    return (
    <div className="navbar-container">
        <img 
            src="./src/assets/Logo_Completo_Negro.png" 
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
    </div>
    )

}

export { Navbar };
