 import RoutesPath from "./helpers/RoutesPath";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import "./assets/sass/app.scss";
type Post = {
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

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch("../../data.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setPosts(response);
          console.log(response);
        }
      } catch (e) {
        console.error("Une erreur s'est produite lors de la récupération des données :", e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="App">
        <Header />
        <RoutesPath posts={posts} />
      
      </div>
      <Footer />
    </div>
  );
};

export default App;
