import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../Sass/information.sass";

const Information = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Phone</h3>
          <p>(+55) 1197064-0820</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Email</h3>
          <p>oliveira.jeferson.jso@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Environment</h3>
          <p>São Paulo</p>
        </div>
      </div>
    </section>
  );
};

export default Information;
