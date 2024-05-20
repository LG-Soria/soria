import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import Heading from "./Heading/Heading";
import Proyectos from "./Projects/Proyectos";
import Contacto from "./Contact/Contacto";
import "./Navigation/navigation.css";
import "./Heading/heading.css";
import "./Projects/proyectos.css";
import "./Contact/contacto.css";

export default function Home() {
  return (
    <main>
 
      <Navigation />
      <Heading />
      <Proyectos />
      <Contacto />
    </main>
  );
}
