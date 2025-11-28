import "./Info.css";
import { AppWindow } from 'lucide-react';
import { Server } from 'lucide-react';
import { BrainCog } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Info() {
    return(
        <div className="component-wrapper Info-wrapper">
            <div className="left-info">
                <div>
                    <AppWindow/>
                    <div>
                        <p>Desarrollo Web moderno (Frontend)</p>
                        <p>Focus React and TypeScript</p>
                    </div>
                </div>
                <div>
                    <Server/>
                    <div>
                        <p>Automatizacion de procesos</p>
                        <p>n8n, Cursor, LLM's, integration</p>
                    </div>
                </div>
                <div>
                    <BrainCog/>
                    <div>
                        <p>Desarrollo Backend y APIs</p>
                        <p>Node, TypeScript, Springboot</p>
                    </div>
                </div>
            </div>
            <div className="right-info">
                <p>How can I help your business?</p>
                <p>Creo soluciones web que resuelven problemas reales. 
                Como desarrollador full-stack autodidacta, 
                he aprendido a convertir necesidades del día a día en aplicaciones funcionales 
                desde automatizar procesos que toman horas hasta construir herramientas 
                que facilitan el trabajo de equipos completos. <br />
                Mi experiencia liderando equipos comerciales me enseñó algo clave: <br />
                la tecnología solo vale si hace la vida más fácil. 
                Por eso, cuando desarrollo, pienso primero en el usuario y en el impacto real que puede tener una buena solución.</p>
                <Button variant="outline">Explore More</Button>
            </div>
        </div>
    )
}

export { Info };