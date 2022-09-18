import "./footer.css"
// react-icons
import { BsFacebook, BsInstagram } from "react-icons/bs"


const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer_logo">LMC</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/whoslauty/" rel="noreferrer" target="_blank" ><BsFacebook/> </a>
        <a href="#instagram"><BsInstagram/> </a>
      </div>

      <div className="footer_copyright">
        <small>© Lautaro Caceres. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer