import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="products" element={<Products />}></Route>
        {/* <Route path="services"></Route>
        <Route path="pricing"></Route>
        <Route path="contact"></Route> */}
      </Routes>
    </div>
  );
}

export default App;
