import React from "react";
import Carrousel from "../../components/carrousel";
import Collapse from "../../components/collapse";
import Host from "../../components/host";
import Info from "../../components/info";
import Stars from "../../components/stars";
import Tag from "../../components/tag";
import "./style.scss";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

type AccommodateProps = {
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
};

/**
 * Accommodate Component.
 *
 * @param {Object} AccommodateProps - Props for the Accommodate component.
 * @param {Array<Object>} AccommodateProps.posts - An array of objects containing post data for the Accommodate component.
 * @returns {JSX.Element} - The JSX element representing the Accommodate component.
 */

const Accommodate: React.FC<AccommodateProps> = ({ posts }) => {
  const [index, setCurrentindex] = useState<number>(0);
  const [error, setError] = useState(false);
  /**
   * recuperer le ID
   */
  const { id } = useParams();

  ///slidesLenghth
  const slidesLenghth =
    posts
      .filter((post) => post.id === id)
      .map((post) => post.pictures.length)
      .find((pictures) => pictures !== undefined) || 0;

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
  function keyclavier(e: KeyboardEvent): void {
    if (e.keyCode === 37) {
      goToPrevious();
    } else if (e.keyCode === 39) {
      goToNext();
    }
  }

  document.addEventListener("keydown", keyclavier);

  ///tags
  ///tagLenght
  const tagLength =
    posts
      .filter((post) => post.id === id)
      .map((post) => post.tags.length)
      .find((tags) => tags !== undefined) || 0;

  const tag: JSX.Element[] = [];
  for (let item = 0; item <= tagLength - 1; item++) {
    posts
      .filter((post) => post.id === id)
      .map((post) => tag.push(<Tag tags={post.tags[item]} key={item} />));
  }
  const Rating: number =
    posts
      .filter((post) => post.id === id)
      .map((post) => post.rating)
      .find((rating) => rating !== undefined) || 0;
  const stars = Array(5).fill(0);

  const colorStars = {
    grey: "#f6f6f6",
    red: "#ff6060",
  };
  /**
   * Vérifier si l'utilisateur existe
   */
  const invalidId = id.match(/^[a-z0-9]{8}$/i) === null;
  useEffect(() => {
    if (!invalidId) {
      const getCurrentAccommodationData = async () => {
        try {
          let data = {};
          const response = await fetch("../../data.json");

          if (response.ok) {
            data = await response.json();

            const currentAccommodationData = data.find(
              (accommodation) => accommodation.id === id
            );

            if (currentAccommodationData === undefined) {
              setError(true);
            }
          }
        } catch (err) {
          setError(true);
        }
      };

      getCurrentAccommodationData();
    }
  });

  if (invalidId) {
    return <Navigate to="/*" />;
  }

  if (!error) {
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
        <div className="containerInfo">
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
            <ul className="tags">{React.Children.toArray(tag)}</ul>
          </div>
          <div className="containerHostStars">
            <div className="host">
              {posts
                .filter((post) => post.id === id)
                .map((post) => (
                  <Host
                    key={post.id}
                    picture={post.host.picture}
                    name={post.host.name}
                  />
                ))}
            </div>
            <div className="star">
              {stars.map((_, rating) => {
                return (
                  <Stars
                    key={rating}
                    color={Rating > rating ? colorStars.red : colorStars.grey}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="collapseHosing">
          {posts
            .filter((post) => post.id === id)
            .map((post) => (
              <Collapse
                title="description"
                text={post.description}
                key={post.id}
              />
            ))}
          {posts
            .filter((post) => post.id === id)
            .map((post) => (
              <Collapse
                title="Équipements"
                ArryText={post.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
                key={post.id}
              />
            ))}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/*" />;
  }
};

export default Accommodate;
