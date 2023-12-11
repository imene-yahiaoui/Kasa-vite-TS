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

type About = {
  key:number;
  title: string;
  text: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
const [dataAbout,setDataAbout]= useState<About[]>([]);
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
        console.error("Une erreur s'est produite lors de la récupération des données :", e);
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
        console.error("Une erreur s'est produite lors de la récupération des données :", e);
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
