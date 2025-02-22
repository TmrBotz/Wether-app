import styles from "./Footer.module.css";
import openWeatherLogo from "../../assets/openweatherImg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.openWeather}>
        
      <p className={styles.info}>Designed and Coded by : @Tmr_botz</p>
      <p>
        <sup>&#169; </sup>
        {currentYear} <span className={styles.myName}>Tmrbotz</span>
      </p>
      </footer>
  );
}

export default Footer;
