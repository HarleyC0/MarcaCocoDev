import "./Home.css"

function Home() {
    return(
        <div className="home-container">
            <div className="container-home">
                <p className="orange-background p-white burbuja-orange">Hello, I'am </p>
                <p className="primary-white p-white">Harley Contreras</p>
                <p className="p-white">FullStack Developer with JS emviroment</p>
                <div className="cv-work-div">
                    <p className="orange-background p-white">Download CV</p>
                    <p className="p-white">My Work</p>
                </div>
            </div>
            <img 
                src="./src/assets/gemini-imagen-portada.png" 
                alt="Logo" 
                className="navbar-logo"
            />
        </div>
    );
}

export { Home };