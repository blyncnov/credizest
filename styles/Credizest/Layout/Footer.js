import styled from "styled-components";

export const Footer__Container = styled.div`
  width: auto;
  background-color: #0a192f;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: white !important;
  padding: 2em 0;
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

export default Footer__Container;
