import React from "react";

import {
  Goals__Container,
  Goals__Section,
} from "../styles/Credizest/Homepage/Goals";

import { Maximum__Width__Widget } from "../styles/Credizest/constants/helpers";

const Goals = () => {
  return (
    <>
      <Goals__Container>
        <Maximum__Width__Widget>
          <Goals__Section>
            <h3>One platform, everything you need to grow your company</h3>
          </Goals__Section>
        </Maximum__Width__Widget>
      </Goals__Container>
    </>
  );
};

export default Goals;
