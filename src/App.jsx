import Header from "./components/Header/Header";
import Boxcontainer from "./components/Boxcontainer/Boxcontainer";
import Searchcategory from "./components/Searchcategory/SearchCategory";
import Footer from "./components/Footer/Footer";
import "./App.css";

import Contextprovider from "./Context/Context";
import SearchSubcategory from "./components/SearchSubcategory/SearchSubcategory";

function App() {
  return (
    <>
      <Contextprovider>
        <Boxcontainer>
          <Header />
          <div>
            <p className="head-text">Explore real-world designs</p>
          </div>

          <Searchcategory />
          <SearchSubcategory/>
        </Boxcontainer>
        <Footer />
      </Contextprovider>
    </>
  );
}

export default App;