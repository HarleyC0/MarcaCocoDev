import "./Blog.css"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function Blog() {
    return(
        <div className="component-wrapper blog-wrapper">
            <div className="sup-blog">
                <div>
                    <p>Content Notes</p>
                    <p>Comparto un poco de mi proceso</p>
                </div>
                <NavigationMenu className="Filter-blog">
                <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Reels</NavigationMenuLink> 
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>LinkedIn</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Snippets</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="body-blog">
                <div className="blog-card blog-card-orange">
                    <h3>App Design</h3>
                    <p className="blog-card-subtitle">Ave Delittery App</p>
                    <div className="blog-card-content">
                        {/* Placeholder for app mockups */}
                    </div>
                </div>
                <div className="blog-card blog-card-teal">
                    <h3>Web Design</h3>
                    <p className="blog-card-subtitle">Agency Motllite</p>
                    <div className="blog-card-content">
                        {/* Placeholder for web mockups */}
                    </div>
                </div>
                <div className="blog-card blog-card-teal">
                    <h3>Brand</h3>
                    <p className="blog-card-subtitle">Meister</p>
                    <div className="blog-card-content">
                        {/* Placeholder for brand mockups */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Blog };