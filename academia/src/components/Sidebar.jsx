import Social from "./Social";
import "../Sass/sidebar.sass";
import Information from "./Information";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img
        src="https://via.placeholder.com/170"
        alt="Jeferson Santos Oliveira"
      />
      <h2 className="titulo">Desenvolvedor Full Stack</h2>
      <Social />
      <Information />
      <a href="" className="download">
        Dowload currículo
      </a>
    </aside>
  );
};

export default Sidebar;
