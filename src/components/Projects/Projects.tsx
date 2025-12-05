import ToDoImg from "@/assets/ToDo.png";
import ContratosMlImg from "@/assets/ContratosML.png";


function Projects() {
    return (
        <section className="flex flex-col border-t-1 border-border py-10 px-5 sm:px-20 xl:px-52 bg-background min-h-[1000px]">
            <div className="text-left">
                <h1 className="text-4xl font-bold mb-2">Projects</h1>
                <p className="text-gray-600 dark:text-gray-400">Here you will find a selection of projects I have worked on.</p>
            </div>
            <div className="grid items-start gap-x-3 grid-cols-2 pt-10">
                <div className="grid gap-y-3 grid-cols-1 text-left">

                    
                    <a href="https://harleyc0.github.io/React-Project_Task/" target="_blank">
                        <div className="relative rounded-lg overflow-hidden group border-gray-300 dark:border-border border-1">
                            <div className="relative">
                                <img src={ToDoImg} alt="" fetchPriority="high" sizes="(max-width: 768px) 100vw, 40vw" width="600" height="600" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className="p-4">
                                        <h1 className="text-white text-xl font-bold">ToDo List App</h1>
                                        <p className="text-white">App de lista de tareas interactiva</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">React JS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                </div>

                <div className="grid gap-y-3 grid-cols-1 text-left">

                    
                    <a href="https://contratosml.vercel.app/" target="_blank">
                        <div className="relative rounded-lg overflow-hidden group border-gray-300 dark:border-border border-1">
                            <div className="relative">
                                <img src={ContratosMlImg} alt="" fetchPriority="high" sizes="(max-width: 768px) 100vw, 40vw" width="600" height="600" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className="p-4">
                                        <h1 className="text-white text-xl font-bold">Contract Auto-Generator</h1>
                                        <p className="text-white">Automatización de contratos que transforma datos de formularios en PDFs legales listos para firmar, <br />
                                        reduciendo horas de trabajo manual a segundos.</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">NodeJs</div>
                                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Express</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                </div>
            </div>
        </section>
    )
}

export { Projects }