import React from "react";
import PhotoHome from "../../containers/photoHome";
import Frame from "../../components/frame";
import "./style.scss";

interface HomeProps {
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
      <PhotoHome />
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
