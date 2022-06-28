import styled from "styled-components";

export const AboutSection__Container = styled.div`
  width: 100%;
  padding: 5em 0;
  background-color: #e3ebf6;

  @media (max-width: 768px) {
    padding: 2em 0;
  }
`;

export const AboutSection__Section = styled.div`
  width: 100%;
  text-align: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  line-height: 1.5;
  color: #12263f;

  .AboutSection__Text__Left {
    padding: 1em 0;

    h2 {
      font-size: 1.4rem;
    }

    p {
      margin: 1.5em 0;
      font-size: 16px;
    }

    ul {
      color: #12263f;
      text-opacity: 1;
      font-weight: 400;

      li {
        margin: 1em 0;
        display: flex;
        gap: 1em;
        font-size: 16px;
      }
    }
  }

  .AboutSection__Text__Right {
    display: flex;
    gap: 2em;
    flex-direction: column;

    h2 {
      color: #333333;
      font-size: 1.3rem;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    }

    p {
      color: rgba(81, 99, 111, 0.8);
      margin: 0.5em 0;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutSection__Box = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  border: 0.1px solid #e3ebf6;
  padding: 1.5em;
  border-radius: 5px;
  box-shadow: 0px 1px 30px rgba(141, 157, 168, 0.01),
    0px 1px 16px rgba(141, 157, 168, 0.02);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default AboutSection__Container;
