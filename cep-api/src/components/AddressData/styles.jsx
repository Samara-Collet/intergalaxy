import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: auto;
  border: 2px solid #949494;
  padding: 20px;

  li {
    margin: 15px 0;
    color: #2c2c2c;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;
