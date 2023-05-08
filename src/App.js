import { BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"

//ALL COMPONENTS IMPORT
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer";
import Contact from "./components/Contact.js";
import Services from "./components/Services.js";


//ALL STYLES OF COMPONENTS
import"./styles/style.scss";
import"./styles/header.scss";
import"./styles/home.scss";
import"./styles/footer.scss";
import"./styles/contact.scss";

import"./styles/mediaquery.scss";

const App = () => {
  return (
    <Router>
      <Header/>
   <Routes>
    <Route exact path="/" element ={<Home/>}/>
    <Route exact path="/contact" element ={<Contact/>}/>
    <Route exact path="/services" element ={<Services/>}/>
   </Routes>
   <Footer/>
    </Router>
  )
}

export default App

