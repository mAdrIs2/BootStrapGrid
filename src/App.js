import Navbar from "./components/Navbar";
import List from "./components/List";
import About from "./components/About";
import Contact from "./components/Contact";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  // eslint-disable-next-line

  const handleClick = (value) => {
    if (value) {
      if (list.includes(value)) {
        setShowWarning(true);
        setTimeout(function () {
          setShowWarning(false);
        }, 2000);
      } else setList([...list, value]);
    }
  };

  const deleteItem = (value) => {
    setList(list.filter((e) => e !== value));
  };

  return (
    <Router >
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <List
                list={list}
                handleClick={handleClick}
                delItem={deleteItem}
                showWarning={showWarning}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
