import  {Navbar}  from "./componants/Navbar/Navbar";
import Header from "./componants/Header/Header" ;
import Services from "./componants/Services/Services";
import Works from "./componants/works/Works";
import Footer from "./componants/footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services/>
      <Works />
      <Footer/>

    </div>

  );
}

export default App;
