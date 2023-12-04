import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Accommodate from "../../pages/accommodate";
import About from "../../pages/about";
import NotFound from "../../pages/notFound";

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/accommodate" element={<Accommodate/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
