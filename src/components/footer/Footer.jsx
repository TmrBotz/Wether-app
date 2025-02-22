import styles from "./Footer.module.css";
import openWeatherLogo from "../../assets/openweatherImg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
    <p>
        ©
        {currentYear} <span className={styles.myName}>Tmrbotz</span>
      </p> 
      </footer>
  );
}

export default Footer;
