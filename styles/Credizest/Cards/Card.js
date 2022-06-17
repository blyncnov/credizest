import styled from "styled-components";

export const __Card = styled.div`
  width: 450px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card__Widget = styled.div`
  width: 100%;
  border-radius: 3px;
  padding: 1.5em 1.5em;
  color: black;
  position: relative;
  z-index: 3;
  border: 1px solid rgba(223, 246, 255, 0.157);
  background-color: rgb(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: rgb(0 0 0 / 2%) 0px 1px 0px, rgb(0 0 0 / 3%) 0px 0px 9px,
    rgb(0 0 0 / 7%) 0px 20px 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgb(255, 255, 255, 0.2);
    border-radius: 3px;
    filter: blur(5px);
  }

  h2 {
    color: black;
  }
`;

export const Card__Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: white;

  @media (max-width: 768px) {
    gap: 1em;
    font-weight: 400;
  }
`;

export const Card__Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card__Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Card__Number {
    h2 {
      color: white !important;
    }
  }
`;

export const Card__Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .User_column {
    display: flex;
    margin-top: 0.5em;
    justify-content: space-between;
    align-items: center;
  }

  .User__FullName {
    h3 {
      font-weight: 400;
    }
  }

  .Expiry__date {
    h3 {
      font-weight: 400;
    }
  }
`;

export default Card__Widget;
