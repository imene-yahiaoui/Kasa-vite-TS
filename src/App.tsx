import RoutesPath from "./helpers/RoutesPath";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import "./assets/sass/app.scss";
type post = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
};

type dataAbout = {
  key: number;
  title: string;
  text: string;
};

/**
 * Fetches data from a JSON file.
 *
 * @param {string} url - The URL of the JSON file to be fetched.
 * @returns {Promise<{ data: any, dataAbout: any }>} - A Promise that resolves to an object containing the fetched data and dataAbout.
 */

const App: React.FC = () => {
  const [posts, setPosts] = useState<post[]>([]);
  const [dataAbout, setDataAbout] = useState<dataAbout[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch("../../data.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setPosts(response);
        }
      } catch (e) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          e
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const requete = await fetch("../../about.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setDataAbout(response);
        }
      } catch (e) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          e
        );
      }
    };
    fetchAbout();
  }, []);
  return (
    <div>
      <div className="App">
        <Header />
        <RoutesPath posts={posts} dataAbout={dataAbout} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
