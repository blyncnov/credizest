import styled from "styled-components";

export const Footer__Container = styled.div`
  width: auto;
  background-color: #fafafb;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: black !important;
  padding: 2em 0;
  border-top: 0.2px solid #333;
`;

export const Footer__Section = styled.div`
  width: auto;
  position: relative;
`;

export const Footer__Part = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em;
`;

export const Footer__Column = styled.div`
  width: auto;
  position: relative;
  line-height: 1.5;

  h3,
  h2 {
    font-size: 1.2em;
    font-weight: 600;
  }

  p,
  li {
    margin: 0.8em 0;
    font-size: 13px;
  }

  li {
    cursor: pointer;
  }
`;

export default Footer__Container;
