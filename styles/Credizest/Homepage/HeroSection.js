import styled from "styled-components";

import BlobImage from "../../../public/svg/blob.svg";

export const HeroSection_Container = styled.div`
  color: white;
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSection_Container__Column = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroSection_Container__Row = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.6em;
  padding: 5px 0;

  h1 {
    font-size: 50px;
    color: #47b5ff;

    span {
      display: block;
      color: #ffffff;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 24px;
  }

  .show__text {
    background-color: white;
    color: black;
    padding: 1em 1em;
    z-index: 30;
    border-radius: 2px;

    p {
      margin-top: 1em;
      font-size: 0.8rem;
      line-height: 1.3;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5em;
    padding:  0;

    h1 {
      font-size: 34px;
    }

    .show__text {
      display: none;
      position: relative;
      border-radius: 2px;
      bottom: 0;
      right: 0;
    }
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 25px;
    }
  }
`;

export const HeroSection_Container__ShowCase = styled.div`
  position: relative;
`;

export const HeroSection_Container__ShowCase__Image = styled.div`
  width: auto;
`;

export default HeroSection_Container;
