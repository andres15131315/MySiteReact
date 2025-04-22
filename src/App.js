import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Navbar />
     <main>
       <Section id="servicios" title="Servicios">
       Ofrecemos soluciones en desarrollo web, diseño UX/UI y soporte tecnológico
       </Section>
       <Section id="usuarios" title="Usuarios">
         Mas de 1,000 usuarios confian en nuestra plataforma cada día.
         </Section>
         <Section id="contacto" title="Contacto">
          Puedes escribirnos a contacto@miapp.com o llamarnos al 123-456-7890.
        </Section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
