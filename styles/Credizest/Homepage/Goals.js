import styled from "styled-components";

export const Goals__Container = styled.div`
  width: 100%;
`;

export const Goals__Section = styled.div`
  padding: 2em 0 1em 0;
  line-height: 1.5;

  h3 {
    font-weight: 500;
    text-align: center;
  }
`;

export const Goals__Grid__Section = styled.div`
  margin: 2em 0;
  display: grid;
  gap: 1em;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Goals__Grid__Box = styled.div`
  padding: 1em;
  border-radius: 5px;
  border: 0.1px solid #e3ebf6;
  text-align: center;
  box-shadow: 0px 1px 30px rgba(141, 157, 168, 0.01),
    0px 1px 16px rgba(141, 157, 168, 0.02);
  transition: all 0.3s ease-in-out;

  p {
    margin: 0.5em 0;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export default Goals__Container;
