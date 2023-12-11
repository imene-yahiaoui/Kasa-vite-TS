import React from "react";
import Carrousel from "../../components/carrousel";
// import Collapse from "../../components/collapse";
// import Host from "../../components/host";
import Info from "../../components/info";
// import Stars from "../../components/stars";
 import Tag from "../../components/tag";
import"./style.scss";
import { useState} from "react";
import { useParams } from "react-router-dom";


type AccommodateProps = {
  PictureProps:{
    photo:string;
    text:string;
    paragraphe:string;
  }
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
  CarrouselProps : {
    slides: strin;
    slide:string;
    key:number;
  };
}

const Accommodate: React.FC<AccommodateProps > = ({ posts }) => {
  const [index, setCurrentindex] = useState(0);
 //recuperer le ID
  const { id } = useParams();
const test= posts
console.log("///////////////////ici",test)
    ///slidesLenghth
    const slidesLenghth = posts
    .filter((post) => post.id === id)
    .map((post) => post.pictures.length);
console.log('slidesLenghth',slidesLenghth)
  /// function presedent
  const goToPrevious = () => {
    const firstSlide = index === 0;

    const newIndex = firstSlide ? slidesLenghth - 1 : index - 1;

    setCurrentindex(newIndex);
  };
  ///function suivant
  const goToNext = () => {
    const lastSlide = index === slidesLenghth - 1;

    const newIndex = lastSlide ? 0 : index + 1;
    setCurrentindex(newIndex);
  };

  ////keyboard
  function keyclavier(e) {
    if (e.keyCode === 37) {
      goToPrevious();
    } else if (e.keyCode === 39) {
      goToNext();
    }
  }
  document.addEventListener("keydown", keyclavier);

  return (
    <div className="App">

      <div className="carrousel_imgs">

          {posts
          .filter((post) => post.id === id)
          .map((post) => (
            <Carrousel slides={post.pictures[index]} key={post.id} />
          ))}
            {posts
              .filter((post) => post.id === id)
              .map((post) => (
                <i
                  style={{
                    display: post.pictures.length === 1 ? "none" : "block",
                  }}
                  key={post.id}
                  className="fa-solid fa-angle-left"
                  onClick={goToPrevious}
                ></i>
              ))}
            {posts
              .filter((post) => post.id === id)
              .map((post) => (
                <i
                  style={{
                    display: post.pictures.length === 1 ? "none" : "block",
                  }}
                  key={post.id}
                  className="fa-solid fa-angle-right"
                  onClick={goToNext}
                ></i>
              ))}

            {posts
              .filter((post) => post.id === id)
              .map((post) => (
                <p
                  style={{
                    display: post.pictures.length === 1 ? "none" : "flex",
                  }}
                  key={post.id}
                  className="carousel-notes"
                >
                  {[index + 1]}/{post.pictures.length}
                </p>
              ))}
      </div>

      <div className="containerTagInfo">
              {posts
                .filter((post) => post.id === id)
                .map((post) => (
                  <Info
                    title={post.title}
                    location={post.location}
                    key={post.id}
                  />
                ))}

             
            </div>

    </div>

  );
}

export default Accommodate;
