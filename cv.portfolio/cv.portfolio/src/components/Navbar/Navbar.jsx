import styles from './Navbar.module.css';

//navbar komponent som visar länkarna i navbaren
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>{/*lista över alla navi länkar */}
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

