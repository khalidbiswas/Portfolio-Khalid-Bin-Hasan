import React from "react";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <>
     <section>
      <Hero></Hero>
     </section>
      <section>
        <Skills></Skills>
      </section>
      <section>
        <Projects></Projects>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </>
  );
};

export default Home;
