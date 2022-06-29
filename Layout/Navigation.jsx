import React, { useState } from "react";
import Link from "next/link";

import { FaTimes } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import {
  Navigation__Container,
  Navigation__Container__Nav,
  Navigation__Container__Column,
  Navigation__Container__Rows,
  Navigation__Logo,
  Navigation__List,
  Navigation__List__Items,
} from "../styles/Credizest/Layout/Navigation";

import {
  Maximum__Width__Widget,
  Credizest__Button,
} from "../styles/Credizest/constants/helpers";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const isBarClickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Navigation__Container>
        <Maximum__Width__Widget>
          <Navigation__Container__Nav>
            <Navigation__Container__Column>
              <Navigation__Container__Rows>
                <div className="Navigation__left">
                  <Navigation__Logo>
                    <h2>Credizest</h2>
                  </Navigation__Logo>
                </div>
                <div
                  className={
                    isClicked
                      ? "Navigation__right openActive"
                      : "Navigation__right"
                  }
                >
                  <Navigation__List>
                    <Navigation__List__Items>Home</Navigation__List__Items>
                    <Navigation__List__Items>Blog</Navigation__List__Items>
                    <Navigation__List__Items>Giftcards</Navigation__List__Items>
                    <Navigation__List__Items>
                      Get Started
                    </Navigation__List__Items>
                  </Navigation__List>

                  <Link href="/auth/login">
                    <a style={{ color: "inherit" }}>
                      <Credizest__Button padding="15px 30px">
                        Sign In
                      </Credizest__Button>
                    </a>
                  </Link>
                </div>
                <div className="Navigation__Mobile" onClick={isBarClickHandler}>
                  <h1>
                    {isClicked ? (
                      <FaTimes style={{ color: "black" }} />
                    ) : (
                      <RiBarChartHorizontalLine />
                    )}
                  </h1>
                </div>
              </Navigation__Container__Rows>
            </Navigation__Container__Column>
          </Navigation__Container__Nav>
        </Maximum__Width__Widget>
      </Navigation__Container>
    </>
  );
};

export default Navigation;
