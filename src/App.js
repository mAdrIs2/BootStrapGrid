import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row row-col-auto justify-content-center">
        <div className="col-12 p-2 mb-5 bg-dark">
          <Navbar />
        </div>
        <Content />
        <div className="col-12 position:fixed bottom-0 text-center bg-dark text-white p-4 mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
