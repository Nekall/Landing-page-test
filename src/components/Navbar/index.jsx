// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
  const links = [
    {target: "#batcat", name: "Batcat"},
    {target: "#doghost", name: "Doghost"},
    {target: "#gravestone", name: "Gravestone"},
    {target: "#hantedHouse", name: "Hanted House"},
    {target: "#pumpkins", name: "Pumpkins"},
  ]

  return( <nav className={styles.__navbar}>
    <p className={styles.__name_brand}>NameBrand</p>
    <ul className={styles.__navlink}>
        {links.map((link, index)=><li key={`nav-link-${index}`}><a href={link.target}>{link.name}</a></li>)}
    </ul>
  </nav>);
};

export default Navbar;
