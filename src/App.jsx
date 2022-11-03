import { useContext } from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Productlist from "./components/productlist/productlist";
import Toggle from "./components/toggle/toggle";
import Contact from "./components/contact/contact";
import { ThemeContext } from "./context";

const App = () => {

  const Theme = useContext(ThemeContext);
  const darkmode = Theme.state.darkmode;
  return (
    <div style={{backgroundcolor:darkmode ? "#222" : "white",
     color: darkmode && "white",
     }}
     >
         <Toggle/>
         <Intro />
         <About />
         <Productlist/>
         <Contact/>
         
    </div>
  );
};

export default App;