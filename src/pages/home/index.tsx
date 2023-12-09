import PhotoHome from "../../containers/photoHome";
// import Frame from "../../components/frame";
import "./style.scss";

const Home = () => {

  return (
    <div>
      
        <PhotoHome
        />
     
    
      {/* <div className="container">
        {posts.map((post) => (
          <Frame
            cover={post.cover}
            title={post.title}
            key={post.id}
            id={post.id}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;