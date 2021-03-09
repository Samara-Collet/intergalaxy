import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 500px;
  height: 90px;

  .search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 40px;
    margin-top: 10px;
  }

  .error {
    color: #a81f1f;
  }

  input,
  button {
    height: 100%;
    border-radius: 5px;
  }

  input {
    border: 2px solid #949494;
    width: 200px;
    padding: 0 10px;
    color: #808080;
    margin-right: 15px;
  }

  button {
    width: 100px;
    color: #fafafa;
    background-color: #9d00e6;
  }

  button:hover {
    background-color: #bd3df8;
  }

  @media (max-width: 480px) {
    width: 100%;
    .search {
      width: 100%;
    }
    input {
      width: 150px;
    }
  }

  @media (max-width: 280px) {
    input {
      margin-right: 8px;
    }
  }
`;
