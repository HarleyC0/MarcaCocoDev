import "./Blog.css"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function Blog() {
    return(
        <div className="component-wrapper blog-wrapper">
            <div>
                <p>My lasted videos</p>
                <p>comparto mi proceso en redes</p>
            </div>
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

export { Blog };