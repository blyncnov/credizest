import React from "react";
import Link from "next/link";

import {
  Maximum__Width__Widget,
  Flex__Item__Widget,
  Credizest__Button,
} from "../styles/Credizest/constants/helpers";

import {
  Footer__Container,
  Footer__Section,
  Footer__Part,
  Footer__Column,
} from "../styles/Credizest/Layout/Footer";

const Footer = () => {
  return (
    <>
      <Footer__Container>
        <Maximum__Width__Widget>
          <Footer__Section>
            <Footer__Part>
              <Footer__Column>
                <h2>
                  <span>Credizest</span>
                </h2>
                <p>
                  Borrow LUSD against ETH & Building a global financial platform
                  for lending/borrowing crypto assests and real world assets as
                  NFTS Consectetur, porro dolore. Animi, vitae!
                </p>
              </Footer__Column>
              <Footer__Part>
                <Footer__Column>
                  <h3>
                    <span>Quick Links</span>
                  </h3>
                  <Link href="/">
                    <a style={{ color: "inherit" }}>
                      <li>Home</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={{ color: "inherit" }}>
                      <li>Blogs</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={{ color: "inherit" }}>
                      <li>Giftcards</li>
                    </a>
                  </Link>
                  <Link href="/auth/signup">
                    <a style={{ color: "inherit" }}>
                      <li>Get Started</li>
                    </a>
                  </Link>
                </Footer__Column>
              </Footer__Part>
              <Footer__Part>
                <Footer__Column>
                  <h3>
                    <span>Contact Us</span>
                  </h3>
                  <p color="#8892B0">
                    183 Agbede St. Funaab gate, Funaab, Alabata
                  </p>
                  <p color="#8892B0">bholuwatife00@gmail.com</p>
                  <li>+234 (814) 9055 068</li>
                  <p color="#8892B0"> Monday — Friday 8:00am - 5:00pm</p>
                </Footer__Column>
              </Footer__Part>
            </Footer__Part>
          </Footer__Section>

          <hr
            style={{ color: "#ccc", opacity: ".2", margin: "2em 0 1em 0 " }}
          />
          <h6 style={{ textAlign: "center" }}>@credizest | Platform</h6>
        </Maximum__Width__Widget>
      </Footer__Container>
    </>
  );
};

export default Footer;
