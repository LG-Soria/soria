import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import Heading from "./Heading/Heading";
import Proyectos from "./Projects/Proyectos";
import Contacto from "./Contact/Contacto";
import "./Navigation/navigation.css";
import "./Heading/Heading.css";
import "./Projects/Proyectos.css";
import "./Contact/Contacto.css";

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
