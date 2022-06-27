import styled from "styled-components";

export const Header__ = styled.div`
  width: 100%;
  background-color: #1362df;
`;

export const Header__Container = styled.div`
  width: 100%;
  background-color: #1363df;
  height: 100%;
  position: relative;
  background-repeat: repeat;
  background-position: right top;
  background-size: 20px, 20px;
  mask-image: radial-gradient(
    farthest-side at 50% 50%,
    rgb(0, 0, 0),
    rgb(85 18 18 / 100%)
  );
  inset: 0px;
  filter: hue-rotate(2deg);

`;

export default Header__Container;
