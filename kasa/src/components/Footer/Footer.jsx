// Footer.jsx
import React from "react";
import footerImg from "/footerLogo.png";
import "./footer.scss";

function Footer() {
      return (
            <>
                  <footer className="footer">
                        <img
                              src={footerImg}
                              className="logoFooter"
                              alt="kasa logo footer"
                        />
                        <p className="footer_rights">
                              © 2020 Kasa. All right reserved
                        </p>
                  </footer>
            </>
      );
}

export default Footer;
