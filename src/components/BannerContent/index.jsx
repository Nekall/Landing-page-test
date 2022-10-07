// Styles
import styles from "./styles.module.scss";

const BannerContent = ({ image, alternativeText }) => {
  return <div className={styles.__banner_content}>
    <img src={image} alt={alternativeText} />
  </div>;
};

export default BannerContent;
