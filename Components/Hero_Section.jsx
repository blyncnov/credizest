import React from "react";

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
import Image from "next/image";

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
                <Credizest__Button>
                  Get Started for Free <IoIosArrowDropright />
                </Credizest__Button>
                <Credizest__Button
                  bg="transparent"
                  color="black"
                  border="2px solid #ffffff"
                >
                  Download Our App <BsCloudDownload />
                </Credizest__Button>
              </Flex__Item__Widget>
            </HeroSection_Container__Row>
            <HeroSection_Container__Row>
              <HeroSection_Container__ShowCase>
                <HeroSection_Container__ShowCase__Image>
                  <Image
                    src="/svg/blob.svg"
                    height="1000"
                    width="1000"
                    alt="showcaseimage"
                  />
                </HeroSection_Container__ShowCase__Image>
                <Card />
              </HeroSection_Container__ShowCase>
              <div className="show__text">
                <h4>Welcome to Credizest</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                  autem esse explicabo reprehenderit praesentium iste, error
                  omnis dignissimos adipisci molestiae at asperiores vero
                  ducimus, eaque totam est quia unde eius.
                </p>
              </div>
            </HeroSection_Container__Row>
          </HeroSection_Container__Column>
        </HeroSection_Container>
      </Maximum__Width__Widget>
    </>
  );
};

export default Hero;
