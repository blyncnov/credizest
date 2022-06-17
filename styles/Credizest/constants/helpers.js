import styled from "styled-components";

export const Maximum__Width__Widget = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const Flex__Item__Widget = styled.div`
  display: flex;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const Credizest__Button = styled.div`
  padding: ${({ padding }) => (padding ? padding : "20px 24px")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: 5px;
  background-color: ${({ bg }) => (bg ? bg : "#06283d")};
  color: #dff6ff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  box-shadow: rgb(0 0 0 / 4%) 0px 1px 0px, rgb(0 0 0 / 6%) 0px 0px 9px,
    rgb(0 0 0 / 8%) 0px 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

export default Maximum__Width__Widget;
