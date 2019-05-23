import React from "react";
import { Button } from "antd";
import styled from "styled-components";

interface IProps {}

const Container = styled.div`
  background: #ccc;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
`;

class Form extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <Button>버튼</Button>
      </Container>
    );
  }
}

export default Form;
