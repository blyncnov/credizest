import React from "react";

import {
  Maximum__Width__Widget,
  Flex__Item__Widget,
  Credizest__Button,
} from "../styles/Credizest/constants/helpers";

import {
  Footer__Container,
  Footer__Section,
  Footer__Part,
} from "../styles/Credizest/Layout/Footer";

const Footer = () => {
  return (
    <>
      <Footer__Container>
        <Maximum__Width__Widget>
          <Footer__Section>
            <Footer__Part>
              <div>
                <h2>
                  <span>Credizest</span>
                </h2>
                <br />
                <p>
                  Borrow LUSD against ETH & Building a global financial platform
                  for lending/borrowing crypto assests and real world assets as
                  NFTS Consectetur, porro dolore. Animi, vitae! Maiores sunt
                  quia nam. Ab, ipsa. Porro, quaerat enim itaque sed dolorum
                  facilis.
                </p>
                <br />
              </div>
              <Footer__Part>
                <div>
                  <h3>
                    <span>Contact Us</span>
                  </h3>
                  <br />
                  <p color="#8892B0">
                    183 Agbede St. Funaab gate, Funaab, Alabata
                  </p>
                  <br />
                  <p color="#8892B0">bholuwatife00@gmail.com</p>
                  <br />
                  <li>+234 (814) 9055 068</li>
                  <br />
                  <p color="#8892B0"> Monday — Friday 8:00am - 5:00pm</p>
                </div>
              </Footer__Part>
            </Footer__Part>
          </Footer__Section>

          <hr style={{ color: "#ccc", opacity: ".2", margin: "2em 0 0 0 " }} />
          <h6 style={{ textAlign: "center", margin: "1em 0" }}>
            @credizest | Platform
          </h6>
        </Maximum__Width__Widget>
      </Footer__Container>
    </>
  );
};

export default Footer;
