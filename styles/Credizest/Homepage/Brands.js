import styled from "styled-components";

export const Brands__Container = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
`;

export const Brands__Section = styled.div`
  padding: 2em 0;
  text-align: center;
`;

export const Brands__Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 2em 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 20px;
  column-gap: 40px;

  .Brand__Box {
    width: auto;
    text-align: center;
    padding: 0 1em;
  }

  @media (max-width: 768px) {
    column-gap: 40px;
  }
`;

export default Brands__Container;
