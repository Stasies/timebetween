import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 48px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;
export const HomeWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background-color: transparent;
    border: 3px solid #d3d3d3;
    border-radius: 5px;
    height: 50px;
    width: 200px;
    font-size: 24px;
    color: #d3d3d3;
    cursor: pointer;
    &:hover {
      color: paleturquoise;
      border: 3px solid paleturquoise;
    }
    &:active {
      color: purple;
      border: 3px solid purple;
    }
  }
  .text {
    margin-bottom: 30px;
  }
  p {
    margin: 10px 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;
export const HomeForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  .left,
  .right {
    height: 100px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 90%;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 8px 5px;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    .left,
    .right {
      margin: 10px 0;
    }
  }
`;
