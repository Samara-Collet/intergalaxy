import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }
`;
