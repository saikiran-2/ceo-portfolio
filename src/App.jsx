import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar       from "./components/navbar";
import Hero         from "./components/hero";
import About        from "./components/about";
import Awards       from "./components/awards";
import Ventures     from "./components/ventures";
import Career       from "./components/career";
import Media        from "./components/media";
import Speaking     from "./components/speaking";
import Testimonials from "./components/testimonials";
import Contact      from "./components/contact";
import Footer       from "./components/footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <>
      <Navbar       scrollTo={scrollTo} activeSection={activeSection} />
      <main>
        <Hero         scrollTo={scrollTo} />
        <About />
        <Awards />
        <Ventures />
        <Career />
        <Media />
        <Speaking     scrollTo={scrollTo} />
        <Testimonials />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </>
  );
}