import "./Services.css";
import { SquareCode, Layers, Sparkle, GalleryHorizontalEnd } from 'lucide-react';

function Services() {
    return(
        <section className="component-wrapper services-wrapper">
            <div className="services-header">
                <h2>Building Digital Experiences</h2>
                <p>I specialize in creating stunning user interfaces and developing high-quality applications that stand out.</p>
            </div>
            <div className="services-content">
               <div className="services-content-item">
                    <h3><SquareCode className="services-icon"/> What I can do</h3>
                    <p>I can help develop solutions that will help you grow your business:</p>
                    <ul>
                        <li>UI/UX Design</li>
                        <li>Fullstack Web Development</li>
                        <li>API Integration</li>
                    </ul>
               </div>
               <div className="services-content-item">
                <h3><Layers className="services-icon"/> Tools I Use</h3>
                <p>I use the latest tools and technologies to build functional and scalable products:</p>
                <ul>
                    <li>Frontend: <br />
                    <span>Tailwind CSS, React, TypeScript</span></li>
                    <li>Backend: <br />
                    <span>Node.js, Fastify, MongoDB, PostgreSQL</span></li>
                    <li>Design: <br />
                    <span>Figma, Framer, Photoshop</span></li>
                </ul>
               </div>
               <div className="services-content-item">
                <h3><Sparkle className="services-icon"/> UI/UX Design</h3>
                <p>I am a designer first, developer second. I can help design clean and modern interfaces:</p>
                <ul>
                    <li>User-Centered Design</li>
                    <li>Modern & Clean UI</li>
                    <li>Wireframes & Prototypes</li>
                </ul>
               </div>
            </div>
            <div className="services-button-container">
                <a href="/projects" className="services-button"><GalleryHorizontalEnd/>View My Projects</a>
            </div>
        </section>
    )
}

export { Services };