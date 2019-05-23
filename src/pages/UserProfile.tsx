import React from "react";
import styled from "styled-components";
import { Avatar, Icon, Popover } from "antd";
import { SMixinFlexRow } from "../styled/minins";
import UserMenu from "./UserMenu";

interface IProps {}

const Container = styled.div`
  margin: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;

  ${SMixinFlexRow("stretch", "center")};

  .profile {
    flex: 1;
    margin: 0 10px;
  }
`;

class UserProfile extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <div>
          <Avatar size={40} icon="user" />
        </div>
        <div className="profile">
          <span className="user-name">Thomas Jang</span>
          <br />
          <span className="company-name">CHEQUER</span>
        </div>
        <div>
          <Popover
            // overlayClassName="my-antd-popover"
            // trigger="click"
            content={<UserMenu />}
          >
            <Icon type="more" />
          </Popover>
        </div>
      </Container>
    );
  }
}

export default UserProfile;
