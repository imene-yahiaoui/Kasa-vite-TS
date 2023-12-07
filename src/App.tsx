import "./app.scss";
import RoutesPath from "./helpers/RoutesPath";
import Header from "./components/header";
import Footer from "./components/footer";
function App(): JSX.Element {
  return (
    <div>
      <div className="App">
        <Header />
        <RoutesPath />
        <Footer />
      </div>
    </div>
  );
}

export default App;
