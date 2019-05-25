import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px;
  width: 500px;
  padding: 5px 0 0;
  background: #eee;
`;

interface IProps {}
interface IState {}
class DragDrop extends React.Component<IProps, IState> {
  render() {
    return (
      <Container>
        <div data-tab="0">Label 0</div>
      </Container>
    );
  }
}

export default DragDrop;
