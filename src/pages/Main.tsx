import { Navbar, Home, Services, Contact } from '@/components'
import { useEffect } from 'react';

function Main() {

  // scroll cuando la locacion no era "/"
  useEffect(() => {
    // Verificamos si hay una sección guardada a la que debemos navegar
    const scrollToSection = window.sessionStorage.getItem('scrollTo');
    
    if (scrollToSection) {
      // Esperamos un momento para que el DOM se renderice completamente
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
        // Limpiamos el storage después de usarlo
        window.sessionStorage.removeItem('scrollTo');
      }, 100);
    }
  }, []);


  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact/>
    </>
  )
}

export { Main };
