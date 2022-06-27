import React from "react";
import Image from "next/image";

import BrandIdentity1 from "../public/brands/bamboo.png";
import BrandIdentity2 from "../public/brands/chakra.png";
import BrandIdentity3 from "../public/brands/micro.png";
import BrandIdentity4 from "../public/brands/workpay.png"; 
import BrandIdentity5 from "../public/brands/chry.png";

import {
  Brands__Container,
  Brands__Section,
  Brands__Grid,
} from "../styles/Credizest/Homepage/Brands";

import { Maximum__Width__Widget } from "../styles/Credizest/constants/helpers";

const Brands = () => {
  return (
    <Brands__Container>
      <Maximum__Width__Widget>
        <Brands__Section>
          <div className="Brand__Header">
            <h4>
              Trusted by the best teams building technology for Africa&apos;s
              future 💙
            </h4>
          </div>
          <div>
            <Brands__Grid>
              <div className="Brand__Box">
                <Image src={BrandIdentity1} alt="bamboo" />
              </div>
              <div className="Brand__Box">
                <Image src={BrandIdentity2} alt="bamboo" />
              </div>
              <div className="Brand__Box">
                <Image src={BrandIdentity3} alt="bamboo" />
              </div>
              <div className="Brand__Box">
                <Image src={BrandIdentity4} alt="bamboo" />
              </div>
              <div className="Brand__Box">
                <Image src={BrandIdentity5} alt="bamboo" />
              </div>
            </Brands__Grid>
          </div>
        </Brands__Section>
      </Maximum__Width__Widget>
    </Brands__Container>
  );
};

export default Brands;
