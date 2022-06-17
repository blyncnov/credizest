import styled from "styled-components";

export const Navigation__Container = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 1em 0;
`;

export const Navigation__Container__Nav = styled.div`
  width: 100%;
`;

export const Navigation__Container__Column = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation__Container__Rows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Navigation__left {
    display: block;
  }

  .Navigation__right {
    display: flex;
    align-items: center;
    gap: 2em;

    button {
      padding: 12px 24px;
      border: none;
      border-radius: 3px;
      background-color: #06283d;
      color: #ffffff;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      box-shadow: rgb(0 0 0 / 2%) 0px 1px 0px, rgb(0 0 0 / 3%) 0px 0px 8px,
        rgb(0 0 0 / 8%) 0px 20px 30px;
    }

  }

`;

export const Navigation__Logo = styled.div`
  display: block;

  h2 {
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;

export const Navigation__List = styled.ul`
  display: flex;
  gap: 1em;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation__List__Items = styled.li`
  width: auto;
  font-size: 1.1rem;
  // transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: white;

  &:hover {
    color: #dff6ff;
    transform: scale(1.01);
    margin-left: 0.1em;
    padding-bottom: 0.1em;
  }
`;

export default Navigation__Container;
