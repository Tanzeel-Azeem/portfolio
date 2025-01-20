
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Service from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default async function Home (){
  return (
    <div className="max-w-screen-2xl mx-auto scroll-smooth">
      <Header />
      <Hero />
      <Service />
       <About />
       <Portfolio/>
       <Contact />
       <Footer/>
    </div>
  )

}