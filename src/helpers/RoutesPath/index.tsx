import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Accommodate from "../../pages/accommodate";
import About from "../../pages/about";
import NotFound from "../../pages/notFound";
 
type RoutesPathProps ={
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

  About : {
    key:number;
    title: string;
    text: string;
  }

}
  
const RoutesPath: React.FC<RoutesPathProps> = ({ posts,dataAbout }) => {
 



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/accommodate/:id" element={ <Accommodate posts={posts} /> }/>
        <Route path="/about" element={<About dataAbout={dataAbout}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesPath;
