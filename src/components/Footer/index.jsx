// Assets
import pumpkin from "../../assets/images/pumpkin.png"

// Styles
import styles from "./styles.module.scss";

const Footer = () => {
  return (<footer className={styles.__footer}>
    
    <img className={styles.__pumpkin} src={pumpkin} alt="pumpkin" />
  </footer>);
};

export default Footer;
