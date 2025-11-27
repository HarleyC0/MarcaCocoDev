import "./Home.css"
import homeBackImage from "@/assets/homeBackGhibli.png"
import { Button } from "@/components/ui/button";
import { CodeXml } from 'lucide-react';

function Home() {
    return(
        <div 
            className="component-wrapper home-wrapper"
            style={{ backgroundImage: `url(${homeBackImage})` }}
        >
            <div className="home-container">
                <div className="container-home">
                    <p className="homeName">Hey there <br/>, I'am HarleyCo</p>
                    <p className="homeEmail">harleyco37@gmail.com</p>
                    <Button variant="outline" className="homeCv">Download CV</Button>
                </div>
                <div className="containter-home-rigth">
                    <p className="homePhrase">En los problemas <br />veo soluciones en código, <br /> y me encanta lo que hago</p>
                    <div className="homeDescription">
                        <Button variant="outline" size="icon" className="homeCodeXmlButton"><CodeXml/></Button>
                        <p >FullStack Developer <br />with JS emviroment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Home };