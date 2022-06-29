import React from "react";
import Link from "next/link";

import { IoIosArrowDropright } from "react-icons/io";
import { BsCloudDownload } from "react-icons/bs";

import {
  HeroSection_Container,
  HeroSection_Container__Column,
  HeroSection_Container__Row,
  HeroSection_Container__ShowCase,
  HeroSection_Container__ShowCase__Image,
} from "../styles/Credizest/Homepage/HeroSection";

import {
  Maximum__Width__Widget,
  Flex__Item__Widget,
  Credizest__Button,
} from "../styles/Credizest/constants/helpers";

import Card from "./assets/Card";

const Hero = () => {
  return (
    <>
      <Maximum__Width__Widget>
        <HeroSection_Container>
          <HeroSection_Container__Column>
            <HeroSection_Container__Row>
              <h1>
                Failed Payments <span> For Companies Who Gives No Fuck.</span>
              </h1>
              <p>
                Borrow LUSD against ETH & Building a global financial platform
                for lending/borrowing crypto assests and real world assets as
                NFTS Consectetur, porro dolore. Animi, vitae! Maiores sunt quia
                nam. Ab, ipsa. Porro, quaerat enim itaque sed dolorum facilis.
              </p>
              <Flex__Item__Widget>
                <Link href="/auth/signup">
                  <a style={{ color: "inherit" }}>
                    <Credizest__Button>
                      {" "}
                      Get Started for Free <IoIosArrowDropright />
                    </Credizest__Button>
                  </a>
                </Link>

                <Link href="/auth/login">
                  <a style={{ color: "inherit" }}>
                    <Credizest__Button
                      bg="transparent"
                      color="black"
                      border="2px solid #ffffff"
                    >
                      Download Our App <BsCloudDownload />
                    </Credizest__Button>
                  </a>
                </Link>
              </Flex__Item__Widget>
            </HeroSection_Container__Row>
            {/* _______SECOND _______SECTION__________ */}
            <HeroSection_Container__Row>
              <HeroSection_Container__ShowCase>
                <HeroSection_Container__ShowCase__Image></HeroSection_Container__ShowCase__Image>
                <Card />
                <br />
                <div className="show__text">
                  <h4>Welcome to Credizest</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem autem esse explicabo reprehenderit praesentium iste,
                    error omnis dignissimos adipisci molestiae at asperiores
                    vero ducimus, eaque totam est quia unde eius.
                  </p>
                </div>
              </HeroSection_Container__ShowCase>
            </HeroSection_Container__Row>
          </HeroSection_Container__Column>
        </HeroSection_Container>
      </Maximum__Width__Widget>
    </>
  );
};

export default Hero;
