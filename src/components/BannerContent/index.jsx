// Styles
import styles from "./styles.module.scss";

const BannerContent = ({ image, alternativeText, id }) => {
  return <div className={styles.__banner_content}>
    <img src={image} alt={alternativeText} id={id} />
  </div>;
};

export default BannerContent;
