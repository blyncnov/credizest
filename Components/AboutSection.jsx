import React from "react";

import { GiCheckMark } from "react-icons/gi";
import { BsPatchQuestion } from "react-icons/bs";

import {
  AboutSection__Container,
  AboutSection__Section,
  AboutSection__Box,
} from "../styles/Credizest/Homepage/AboutSection";

import { Maximum__Width__Widget } from "../styles/Credizest/constants/helpers";

const AboutSection = () => {
  return (
    <AboutSection__Container>
      <Maximum__Width__Widget>
        <AboutSection__Section>
          <div className="AboutSection__Text__Left">
            <h2>
              Why you should Trust Credizest <BsPatchQuestion />{" "}
            </h2>
            <p>
              If you’re still reading this, we are pretty sure you already
              recognize the benefit of using Ditto. However, if you are still
              not convinced, here’s a few extra points to change your mind .
            </p>
            <ul>
              <li>
                <span>
                  <GiCheckMark />
                </span>
                Chat Support for additional queries
              </li>
              <li>
                <span>
                  <GiCheckMark />
                </span>
                Claim Support for when you have to make a claim
              </li>
              <li>
                <span>
                  <GiCheckMark />
                </span>
                Moral Support for when you need reassurance 😜
              </li>
            </ul>
          </div>
          <div className="AboutSection__Text__Right">
            <AboutSection__Box>
              <h2>Comprehensive & Intuitive Plans</h2>

              <p>
                If you’re still reading this, we are pretty sure you already
                recognize the benefit of using Ditto. However, if you are still
                not convinced, here’s a few extra points to change your mind.
              </p>
            </AboutSection__Box>

            <AboutSection__Box>
              <h2>Understand The Principle & Core Value</h2>

              <p>
                If you&apos;d much rather prefer texting at your own pace, just
                hit us up on WhatsApp. We promise no spam and a hassle free
                experience.
              </p>
            </AboutSection__Box>
          </div>
        </AboutSection__Section>
      </Maximum__Width__Widget>
    </AboutSection__Container>
  );
};

export default AboutSection;
