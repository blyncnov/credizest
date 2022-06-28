import React from "react";
import Image from "next/image";

import Goals__Infomations from "../data/Goals";

import {
  Goals__Container,
  Goals__Section,
  Goals__Grid__Section,
  Goals__Grid__Box,
} from "../styles/Credizest/Homepage/Goals";

import { Maximum__Width__Widget } from "../styles/Credizest/constants/helpers";

const Goals = () => {
  return (
    <>
      <Goals__Container>
        <Maximum__Width__Widget>
          <Goals__Section>
            <h3>
              Learn more about Raise&apos;s plans, features and services. To
              find what fits your company&apos;s needs .
            </h3>
            <Goals__Grid__Section>
              {Goals__Infomations.map((goals) => {
                return (
                  <Goals__Grid__Box key={goals.id}>
                    <Image
                      src={goals.icon}
                      alt="images"
                      width="80"
                      height="80"
                    />
                    <h3>{goals.title}</h3>
                    <p>{goals.desc}</p>
                  </Goals__Grid__Box>
                );
              })}
            </Goals__Grid__Section>
          </Goals__Section>
        </Maximum__Width__Widget>
      </Goals__Container>
    </>
  );
};

export default Goals;
