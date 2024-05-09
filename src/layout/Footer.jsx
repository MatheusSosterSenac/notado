import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "../styles/footer.css";


export default function Footer() {

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/R.+Pero+Vaz+de+Caminha,+285+-+Costa+e+Silva,+Joinville+-+SC,+89218-520/@-26.2808302,-48.8705479,17z/data=!3m1!4b1!4m6!3m5!1s0x94deafe504dd2b5b:0x50f8a7c2fd97828f!8m2!3d-26.280835!4d-48.867973!16s%2Fg%2F11f3nhl76j?entry=ttu", "_blank");
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-section">
              <h4 style={{ color: "white" }}>Localização </h4>
              <button  onClick={openGoogleMaps}>Ver no Google Maps</button>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-section">
              <h4 style={{ color: "white" }}>Redes sociais</h4>
              <ul className="social-links">     
                <li>
                  <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
                  <img class="logo" src="Facebook.png"></img>
                  </a>
                  </li>
                  <li>
                  <a href="//instagram.com" target="_blank" rel="noopener noreferrer">
                  <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"></img>
                  </a>
                  </li>
                {/* Adicione mais redes sociais conforme necessário */}
              </ul>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="footer-section">
              <h4 style={{ color: "white" }}>Contato</h4>
              <a  href="//whatsapp.com">
              <p><img class="logo" src="whatsapp-33.png"></img></p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
