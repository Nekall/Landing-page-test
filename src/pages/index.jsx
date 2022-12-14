// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerContent from "../components/BannerContent";

// Assets
import batcat from "../assets/images/batcat.jpg";
import doghost from "../assets/images/doghost.jpg";
import gravestone from "../assets/images/gravestone.jpg";
import hantedHouse from "../assets/images/hanted-house.jpg";
import pumpkins from "../assets/images/pumpkins.jpg";

// Styles
import styles from "../styles/pages/home.module.scss";

const Home = () => {
  const arrImg = [
    {image: batcat, alternativeText: "batcat", id: "batcat"},
    {image: doghost, alternativeText: "doghost", id: "doghost"},
    {image: gravestone, alternativeText: "gravestone", id: "gravestone"},
    {image: hantedHouse, alternativeText: "hantedHouse", id: "hantedHouse"},
    {image: pumpkins, alternativeText: "pumpkins", id: "pumpkins"},
  ];
  return (
    <div className={styles.__home}>
      <Navbar />
      <section className={styles.__container}>
        {arrImg.map((img, index)=>{
            return(
                <BannerContent key={`banner-content-${index}`} id={img.id} image={img.image} alternativeText={img.alternativeText} />
            )
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
