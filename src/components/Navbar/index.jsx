// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
  const links = [
    {target: "#Link1", name: "Link1"},
    {target: "#Link2", name: "Link2"},
    {target: "#Link3", name: "Link3"}
  ]

  return( <nav className={styles.__navbar}>
    <p className={styles.__name_brand}>NameBrand</p>
    <ul className={styles.__navlink}>
        {links.map((link, index)=><li key={`nav-link-${index}`}><a href={link.target}>{link.name}</a></li>)}
    </ul>
  </nav>);
};

export default Navbar;
