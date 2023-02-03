import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "../Sass/social.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "github", icon: <FaGithub /> },
  { name: "whatsapp", icon: <FaWhatsapp /> },
];

const Social = () => {
  return (
    <section id="social-network">
      {socialNetworks.map((network) => ( 
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default Social;
