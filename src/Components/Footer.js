import React from "react";
import "./Footer.css";


class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <a href="https://www.linkedin.com/in/chloe-litrico/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/chloelitrico"><i className="fab fa-github"></i></a>
        <p> Chloe Litrico &copy; 2018 </p>
      </footer>
    );
  }
}

export default Footer;