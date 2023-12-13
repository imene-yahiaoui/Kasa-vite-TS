import React from "react";
import Picture from "../../components/picture";
import Frame from "../../components/frame";
import ImageDesktop from "../../assets/images/headerDesktop.png";
import "./style.scss";

type HomeProps = {
 
  posts: {
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
  }[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Picture photo={ImageDesktop}     text="Chez vous,"
          paragraphe="partout et ailleurs" />
      <div className="container">
        {posts.map((post) => (
          <Frame
            cover={post.cover}
            title={post.title}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
