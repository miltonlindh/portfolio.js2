import styles from './FooterStyles.module.css'
//footer komponent 
function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p>&copy; 2025 Milton Lindh</p>
      <br/>
      <p><b>Email:</b> milton.lindh@live.com</p>
     <p> <b>tel:</b> +46 761083711</p>
     <p><b>Sweden</b></p>
    </section>
  );
}

export default Footer;